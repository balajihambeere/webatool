import type { NextApiRequest, NextApiResponse } from 'next';
import { ScanHistoryModel, ScanModel } from '../../../models';
import analyzeUrl from '../../../utils/AnalyzeUrl';
import { HttpMethods } from '../../../utils/constants';

export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { method } = req;
    switch (method) {
        case HttpMethods[HttpMethods.GET]:
            try {
                const scans = await ScanModel.findAll();
                res.status(200).json({
                    success: true,
                    data: scans,
                });
            } catch (error) {
                res.status(404).json({
                    success: false,
                });
            }
            break
        case HttpMethods[HttpMethods.POST]:
            try {
                const { url } = req.body;
                // Ensure a URL was provided.
                if (!url) {
                    res.status(404);
                    res.json({ error: 'url required' });
                    return;
                }

                // Ensure the URL is valid.
                try {
                    new URL(url);
                } catch (error: any) {
                    res.status(400);
                    res.json({ error: `Invalid URL: ${error?.message}` });
                    return;
                }

                const scanRows: any = await ScanModel.create({
                    url: url,
                });

                if (scanRows.id) {
                    const results = await analyzeUrl(url);
                    const rows: any = await ScanHistoryModel.create({
                        scanId: scanRows.id,
                        results: results
                    });
                    res.status(201).json({
                        success: true,
                        id: rows.id
                    });
                    return;
                }
                res.status(404).json({
                    success: false,
                    error: 'Unable to create'
                });

            } catch (error: any) {
                res.status(404).json({
                    success: false,
                    error: error.message
                });
            }
            break
        default:
            res.setHeader("Allow", [
                HttpMethods[HttpMethods.GET],
            ]);
            res.status(405).end(`Method ${method} Not Allowed`);
            break
    }
}
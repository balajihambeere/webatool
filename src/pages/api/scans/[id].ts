import type { NextApiRequest, NextApiResponse } from 'next';
import { ScanModel } from '../../../models';
import { HttpMethods } from '../../../utils/constants';

export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {

    const {
        query: { id },
        method,
    } = req

    switch (method) {
        case HttpMethods[HttpMethods.GET]:
            try {
                const rows = await ScanModel.findAll({
                    where: {
                        id: id
                    }
                });
                if (rows.length === 0) {
                    res.status(404).json({ error: 'Scan not found' });
                    return;
                }
                res.status(200).json({
                    success: true,
                    data: rows[0],
                });
            } catch (error) {
                res.status(404).json({
                    success: false,
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
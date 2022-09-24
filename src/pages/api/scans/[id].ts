import type { NextApiRequest, NextApiResponse } from 'next';
import { ScanModel } from '../../../models';
import { HttpMethods } from '../../../utils/constants';

export default async function categoryHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const {
        query: { id },
        method,
    } = req

    console.log(id);

    switch (method) {
        case HttpMethods[HttpMethods.GET]:
            try {
                const result = await ScanModel.findByPk(Number(id), { include: ["scanhistories"] });

                if (result === null) {
                    res.status(404).json({ error: 'Scan not found' });
                    return;
                }
                res.status(200).json({
                    success: true,
                    data: result,
                });
            } catch (error) {
                console.log('result', error);

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
import { Request, Router } from "express";
import { HealthDuplicateResponseDto } from "../types";

export const router = Router();

/**
 * @openapi
 * /healthCheck:
 *   get:
 *     description: Description here
 *     operationId: healthCheckDuplicate
 *     tags:
 *       - health
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthStatusCheck'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */

router.get("/", (req: Request<{}, HealthDuplicateResponseDto>, res) => {
  res.send({ status: "SUCCESS", timestamp: req.timestamp! });
});

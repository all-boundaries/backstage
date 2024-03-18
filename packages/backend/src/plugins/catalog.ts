import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { GithubEntityProvider } from '@backstage/plugin-catalog-backend-module-github';
import { Router } from 'express';
import { PluginEnvironment } from '../types';


export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const builder = await CatalogBuilder.create(env);
  builder.addEntityProvider(
    GithubEntityProvider.fromConfig(env.config, {
      logger: env.logger,
      scheduler: env.scheduler,
    }),
  );

  const { processingEngine, router } = await builder.build();
  await processingEngine.start();
  return router;
}

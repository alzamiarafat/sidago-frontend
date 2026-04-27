'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const client = strapi.db?.connection?.client?.config?.client;

    if (!["postgres", "postgresql"].includes(client)) {
      return;
    }

    await strapi.db.connection.raw(`
      CREATE INDEX IF NOT EXISTS idx_content_pages_page_type_slug
      ON content_pages (page_type, slug)
    `);

    await strapi.db.connection.raw(`
      CREATE INDEX IF NOT EXISTS idx_content_pages_page_type_menu_order
      ON content_pages (page_type, menu_order)
    `);
  },
};

"use strict";

async function upsertSingleType(uid, data) {
  const existing = await strapi.documents(uid).findFirst();

  if (existing?.documentId) {
    return strapi.documents(uid).update({
      documentId: existing.documentId,
      data,
      status: "published",
    });
  }

  return strapi.documents(uid).create({
    data,
    status: "published",
  });
}

module.exports = {
  async create(ctx) {
    const payload = ctx.request.body?.data;

    if (
      !payload?.global ||
      !payload?.homepage ||
      !payload?.insight ||
      !payload?.businessProcess ||
      !payload?.operation
    ) {
      ctx.throw(400, "Missing required seed payload.");
    }

    await upsertSingleType("api::global.global", payload.global);
    await upsertSingleType("api::homepage.homepage", payload.homepage);
    await upsertSingleType("api::insight.insight", payload.insight);
    await upsertSingleType(
      "api::business-process.business-process",
      payload.businessProcess,
    );
    await upsertSingleType("api::operation.operation", payload.operation);

    ctx.body = {
      data: {
        seeded: ["global", "homepage", "insight", "businessProcess", "operation"],
      },
    };
  },
};

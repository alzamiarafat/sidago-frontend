import ArmitageBadge from "./ArmitageBadge";
import ArmitageButton from "./ArmitageButton";

const VAULT_COLUMNS = "armitage-vaults__columns";

function VaultCard({ vault, isLast }) {
  return (
    <article className={`armitage-vault-card ${!isLast ? "armitage-vault-card--spaced" : ""}`}>
      <div className={`armitage-vault-card__grid ${VAULT_COLUMNS}`}>
        <div className="armitage-vault-card__cell">
          <span className="armitage-vaults__mobile-label">Vault</span>
          <div className="armitage-vault-card__name">{vault.name}</div>
          <ArmitageBadge tone={vault.badgeTone}>{vault.badge}</ArmitageBadge>
        </div>

        <div className="armitage-vault-card__cell">
          <span className="armitage-vaults__mobile-label">Chain</span>
          <ArmitageBadge tone={vault.chainTone}>{vault.chain}</ArmitageBadge>
        </div>

        <div className="armitage-vault-card__cell">
          <span className="armitage-vaults__mobile-label">TVL</span>
          <div className="armitage-vault-card__value">{vault.tvl}</div>
        </div>

        <div className="armitage-vault-card__cell">
          <span className="armitage-vaults__mobile-label">Net APY</span>
          <div className="armitage-vault-card__value">{vault.apy}</div>
        </div>

        <div className="armitage-vault-card__actions">
          <ArmitageButton
            href="#vault"
            size="md"
            className="armitage-vault-card__deposit"
          >
            Deposit
          </ArmitageButton>
        </div>
      </div>
    </article>
  );
}

export default function ArmitageVaults({ vaults }) {
  if (!vaults?.length) {
    return null;
  }

  return (
    <div className="armitage-vaults">
      <section className="armitage-container armitage-vaults__section" id="vault">
        <div className={`armitage-vaults__header ${VAULT_COLUMNS}`}>
          <span className="armitage-vaults__header-label">Vault</span>
          <span className="armitage-vaults__header-label">Chain</span>
          <span className="armitage-vaults__header-label">TVL</span>
          <span className="armitage-vaults__header-label">Net APY</span>
          <span />
        </div>

        {vaults.map((vault, index) => (
          <VaultCard
            key={vault.name}
            vault={vault}
            isLast={index === vaults.length - 1}
          />
        ))}
      </section>
    </div>
  );
}

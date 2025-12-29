import SimplePriceList from "../../components/PriceList";
import { HEAD_SPA_SERVICES } from "../../data/headSpa";

export default function HeadSpa() {
  return (
    <div className="mx-auto w-11/12 max-w-6xl py-8">

      <h1 className="text-3xl font-semibold text-brand-forest">
        Head Spa
      </h1>

      <p className="mt-2 max-w-prose text-sm text-brand-forest/80">
        Our head spa services are designed to deeply relax the mind while
        supporting scalp health, circulation, and tension relief. Each treatment
        is customized to your scalp type and comfort level.
      </p>

      <div className="mt-8">
        <SimplePriceList
          title="Head Spa Menu"
          services={HEAD_SPA_SERVICES}
        />
      </div>

    </div>
  );
}

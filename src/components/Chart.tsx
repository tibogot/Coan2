import Copy from "./Copy1";

const Chart = () => {
  return (
    <section className="font-NHD relative flex min-h-screen w-full flex-col overflow-hidden bg-black px-4 py-20 text-white md:px-10">
      <div className="w-full md:flex">
        <div className="left w-1/2">
          <Copy>
            <h2 className="w-3/4">
              Over 18 years grinding alongside founders with a chip.
            </h2>
          </Copy>
        </div>
        <div className="right w-1/2">
          <Copy>
            <p className="text-xl text-balance">
              MIMCO est un groupe d’investissement spécialisé dans l'immobilier
              value add paneuropéen. Le groupe structure et gère des véhicules
              d’investissement innovants au service d’une clientèle
              institutionnelle ainsi que de family offices et banques privées.
            </p>
          </Copy>
        </div>
      </div>

      {/* Chart */}

      <div className="charts mt-10 flex w-full flex-1 items-end gap-10">
        <div className="chart1 flex h-[300px] w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-4">
          <p className="mt-3 text-base text-white md:mt-4">Metals recovery</p>
          <h4 className="text-5xl text-white tabular-nums md:text-9xl">
            <span className="counter1">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
        <div className="chart2 flex h-[500px] w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-4">
          <p className="mt-3 text-base text-white md:mt-4">Metals recovery</p>
          <h4 className="text-5xl text-white tabular-nums md:text-9xl">
            <span className="counter1">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
        <div className="chart3 flex h-[400px] w-1/3 flex-col justify-end rounded-sm bg-orange-400 p-4">
          <p className="mt-3 text-base text-white md:mt-4">Metals recovery</p>
          <h4 className="text-5xl text-white tabular-nums md:text-9xl">
            <span className="counter1">0</span>
            <span className="ml-1">%</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Chart;

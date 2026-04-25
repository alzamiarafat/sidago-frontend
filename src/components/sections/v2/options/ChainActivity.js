export function ChainActivity() {
  return (
    <section className="bg-gray-defi-charcoal">
      <div className="container py-block">
        <div className="mb-3xl flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <h2
              id="wintermute-chain-activity-index"
              className="font-blender text-xl uppercase text-green-dark"
            >
              Wintermute chain activity index
            </h2>
            <div className="text-gray-off-white">
              Make informed decisions with real-time insights into activity and
              costs across major chains.
            </div>
          </div>
          <hr className="!border-[#AB290E]" />
        </div>
        <section>
          <div className="left-bevel relative w-full overflow-hidden bg-gray-defi-charcoal text-gray-off-white">
            <div className="overflow-x-auto scrollbar-none">
              <table className="min-w-full shadow-md bevel">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max sticky left-0 z-10 shadow-md bg-gray-defi-graphite">
                      <div className="flex gap-3">Name</div>
                    </th>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max lg:min-w-[12.5rem] bg-gray-defi-slate">
                      <div className="flex gap-3">Dominant stablecoin</div>
                    </th>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max lg:min-w-[12.5rem] bg-gray-defi-graphite">
                      <div className="flex gap-3">Sector dominance</div>
                    </th>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max lg:min-w-[12.5rem] bg-gray-defi-slate">
                      <div className="flex gap-3">Gas cost for staking</div>
                    </th>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max lg:min-w-[12.5rem] bg-gray-defi-graphite">
                      <div className="flex gap-3">Gas cost for swapping</div>
                    </th>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max lg:min-w-[12.5rem] bg-gray-defi-slate">
                      <div className="flex gap-3">Price impact $10k trade</div>
                    </th>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max lg:min-w-[12.5rem] bg-gray-defi-graphite">
                      <div className="flex gap-3">Price impact $100k trade</div>
                    </th>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max lg:min-w-[12.5rem] bg-gray-defi-slate">
                      <div className="flex gap-3">Price impact $1M trade</div>
                    </th>
                    <th className="whitespace-nowrap px-6 py-4 text-left font-medium md:!w-max lg:min-w-[12.5rem] bg-gray-defi-graphite">
                      <div className="flex gap-3">Price impact $10M trade</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="left-0 z-10 px-6 py-5 sticky shadow-md shadow-[4px_0_16px_0_rgba(20, 20, 20, 0.16)] bg-gray-defi-slate">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <circle cx="10" cy="10" r="10" fill="#fff"></circle>
                            <path
                              fill="#343434"
                              d="m10 3.486-.088.297v8.614l.088.088 3.998-2.364z"
                            ></path>
                            <path
                              fill="#8C8C8C"
                              d="M9.999 3.486 6 10.12l3.999 2.364V3.486"
                            ></path>
                            <path
                              fill="#3C3C3B"
                              d="m9.998 13.242-.049.06v3.068l.05.144 4-5.635z"
                            ></path>
                            <path
                              fill="#8C8C8C"
                              d="M9.999 16.514v-3.272L6 10.879z"
                            ></path>
                            <path
                              fill="#141414"
                              d="m9.999 12.485 3.999-2.364-3.999-1.818z"
                            ></path>
                            <path
                              fill="#393939"
                              d="m6 10.12 3.999 2.365V8.303z"
                            ></path>
                          </svg>
                        </div>
                        <p>Ethereum</p>
                      </div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      Tether
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div className="flex">
                        <div style={{ flex: "0 0 23.55767553537879%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Liquid Staking/Ethereum"
                          >
                            <div className="bg-green-light h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 21.9771376009711%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Lending/Ethereum"
                          >
                            <div className="bg-orange-light h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 7.553753922258036%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Restaking/Ethereum"
                          >
                            <div className="bg-green-dark h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 6.822395081674931%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Canonical Bridge/Ethereum"
                          >
                            <div className="undefined h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 40.08903785971713%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="other/Ethereum"
                          >
                            <div className="h-1 bg-gray-defi-graphite"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>0.0182 USD</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>0.0607 USD</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>9.09 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>9.53 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>11.70 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>NaN bps</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 z-10 px-6 py-5 sticky shadow-md shadow-[4px_0_16px_0_rgba(20, 20, 20, 0.16)] bg-gray-defi-slate">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 146 146"
                          >
                            <circle
                              cx="73"
                              cy="73"
                              r="73"
                              fill="#0052FF"
                            ></circle>
                            <path
                              fill="#fff"
                              d="M73.323 123.729c28.294 0 51.23-22.897 51.23-51.141 0-28.245-22.936-51.142-51.23-51.142-26.843 0-48.865 20.61-51.052 46.843h67.715v8.597H22.27c2.187 26.233 24.209 46.843 51.052 46.843"
                            ></path>
                          </svg>
                        </div>
                        <p>Base</p>
                      </div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      USD Coin
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div className="flex">
                        <div style={{ flex: "0 0 48.78545608272313%" }}>
                          <div className="py-2" data-tooltip-id="Lending/Base">
                            <div className="bg-orange-light h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 14.936628050303971%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Risk Curators/Base"
                          >
                            <div className="undefined h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 14.76559786072891%" }}>
                          <div className="py-2" data-tooltip-id="Dexs/Base">
                            <div className="bg-orange-mid h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 5.998353003703529%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Onchain Capital Allocator/Base"
                          >
                            <div className="undefined h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 15.51396500254046%" }}>
                          <div className="py-2" data-tooltip-id="other/Base">
                            <div className="h-1 bg-gray-defi-graphite"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>0.0015 USD</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>0.0051 USD</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>6.97 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>10.50 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>15.65 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>NaN bps</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 z-10 px-6 py-5 sticky shadow-md shadow-[4px_0_16px_0_rgba(20, 20, 20, 0.16)] bg-gray-defi-slate">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="#213147"
                              d="M1.808 6.08v7.84c0 .504.264.96.704 1.216l6.792 3.92a1.41 1.41 0 0 0 1.4 0l6.792-3.92c.432-.248.704-.712.704-1.216V6.08c0-.504-.264-.96-.704-1.216L10.704.944a1.41 1.41 0 0 0-1.4 0l-6.792 3.92a1.4 1.4 0 0 0-.696 1.216z"
                            ></path>
                            <path
                              fill="#12AAFF"
                              d="m11.48 11.52-.968 2.656a.4.4 0 0 0 0 .232l1.664 4.568 1.928-1.112-2.312-6.344a.167.167 0 0 0-.312 0M13.424 7.056a.167.167 0 0 0-.312 0l-.968 2.656a.4.4 0 0 0 0 .232l2.728 7.48 1.928-1.112-3.376-9.248z"
                            ></path>
                            <path
                              fill="#9DCCED"
                              d="M10 1.24a.3.3 0 0 1 .136.04l7.344 4.24a.27.27 0 0 1 .136.24v8.48a.29.29 0 0 1-.136.24l-7.344 4.24a.3.3 0 0 1-.136.04.3.3 0 0 1-.136-.04L2.52 14.48a.27.27 0 0 1-.136-.24V5.752a.29.29 0 0 1 .136-.24l7.344-4.24a.3.3 0 0 1 .136-.04zM10 0c-.264 0-.52.064-.76.2L1.896 4.44c-.472.272-.76.768-.76 1.312v8.48c0 .544.288 1.04.76 1.312l7.344 4.24c.232.136.496.2.76.2q.398.002.76-.2l7.344-4.24c.472-.272.76-.768.76-1.312v-8.48c0-.544-.288-1.04-.76-1.312L10.752.2a1.5 1.5 0 0 0-.76-.2z"
                            ></path>
                            <path
                              fill="#213147"
                              d="m5.136 17.432.68-1.856 1.36 1.128-1.272 1.168z"
                            ></path>
                            <path
                              fill="#fff"
                              d="M9.376 5.152H7.512a.34.34 0 0 0-.312.216L3.208 16.312l1.928 1.112 4.4-12.056a.165.165 0 0 0-.152-.224zM12.64 5.152h-1.864a.34.34 0 0 0-.312.216l-4.56 12.496 1.928 1.112 4.96-13.608a.165.165 0 0 0-.152-.224z"
                            ></path>
                          </svg>
                        </div>
                        <p>Arbitrum</p>
                      </div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      USD Coin
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div className="flex">
                        <div style={{ flex: "0 0 41.56266164590415%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Bridge/Arbitrum"
                          >
                            <div className="bg-purple-dark h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 19.02491913235822%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Lending/Arbitrum"
                          >
                            <div className="bg-orange-light h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 6.957679615381775%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="RWA Lending/Arbitrum"
                          >
                            <div className="undefined h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 5.36130662049301%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Derivatives/Arbitrum"
                          >
                            <div className="bg-purple-light h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 27.093432985862847%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="other/Arbitrum"
                          >
                            <div className="h-1 bg-gray-defi-graphite"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>0.0038 USD</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>0.0127 USD</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>5.17 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>7.82 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>18.27 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>NaN bps</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="left-0 z-10 px-6 py-5 sticky shadow-md shadow-[4px_0_16px_0_rgba(20, 20, 20, 0.16)] bg-gray-defi-slate">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill="#FF0420"
                              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10"
                            ></path>
                            <path
                              fill="#fff"
                              d="M7.084 12.656q-.894 0-1.464-.42-.564-.428-.564-1.216c0-.112.012-.244.036-.404a24 24 0 0 1 .276-1.3q.511-2.064 2.636-2.064.578-.001 1.036.196.456.187.72.572.264.378.264.9 0 .156-.036.396-.112.668-.272 1.3c-.176.684-.476 1.2-.908 1.54q-.643.502-1.724.5m.108-1.08q.419-.001.712-.248.301-.245.428-.76.174-.706.264-1.232.031-.156.032-.324.001-.684-.712-.684a1.1 1.1 0 0 0-.72.248q-.294.245-.42.76c-.092.336-.18.744-.272 1.232q-.031.149-.032.316c-.004.464.24.692.72.692M10.372 12.584q-.082.001-.128-.052a.2.2 0 0 1-.024-.136l1.036-4.88a.2.2 0 0 1 .084-.136.22.22 0 0 1 .144-.052h1.996q.833.001 1.336.344.511.347.512 1-.001.187-.044.392-.185.863-.76 1.276-.564.413-1.548.412h-1.012l-.344 1.644a.22.22 0 0 1-.084.136.22.22 0 0 1-.144.052zm2.656-2.868a.9.9 0 0 0 .548-.172.82.82 0 0 0 .316-.496q.024-.127.024-.224-.001-.217-.128-.332c-.084-.08-.232-.12-.436-.12h-.9l-.284 1.344z"
                            ></path>
                          </svg>
                        </div>
                        <p>Optimism</p>
                      </div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      USD Coin
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div className="flex">
                        <div style={{ flex: "0 0 33.105897081904665%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Lending/Optimism"
                          >
                            <div className="bg-orange-light h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 12.509545254783141%" }}>
                          <div className="py-2" data-tooltip-id="Dexs/Optimism">
                            <div className="bg-orange-mid h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 8.697793039648134%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Yield Aggregator/Optimism"
                          >
                            <div className="bg-orange-dark h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 6.697817066707189%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="Derivatives/Optimism"
                          >
                            <div className="bg-purple-light h-1"></div>
                          </div>
                        </div>
                        <div style={{ flex: "0 0 38.98894755695687%" }}>
                          <div
                            className="py-2"
                            data-tooltip-id="other/Optimism"
                          >
                            <div className="h-1 bg-gray-defi-graphite"></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>0.0004 USD</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>0.0013 USD</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>9.00 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>18.27 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-ash">
                      <div>178.89 bps</div>
                    </td>
                    <td className="left-0 z-10 px-6 py-5 bg-gray-defi-slate">
                      <div>NaN bps</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-[145px] top-0 w-8 bg-gradient-to-r from-gray-defi-shadow to-transparent transition-all opacity-0"></div>
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-r from-transparent to-gray-defi-shadow transition-all opacity-0"></div>
          </div>
        </section>
      </div>
    </section>
  );
}

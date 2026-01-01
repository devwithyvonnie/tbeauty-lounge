export default function SocialProof() {
  return (
    <section className="border-y border-[#ece8de] bg-white">
      <div className="mx-auto w-11/12 max-w-6xl py-10">
        <h2 className="text-2xl font-semibold">What Clients Say</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "“T Beauty Lounge cares how you look and will make you look beautiful! Thank you T Beauty Lounge Goodyear!. Thank you for the best lashes I've ever had. I can't wait for the other treatments you do because every woman looks gorgeous leaving!”",
            "“Each and everytime I come in I feel ar PEACE, staff always goes above and beyond. I will always HIGHLY reccomend coming here to feel gorgeous and get the relaxation needed.”",
            "“The best place!! Don't go anywhere else, come here!”",
          ].map((q, i) => (
            <div key={i} className="rounded-2xl border border-[#e5e2d9] bg-[#FAF8F3] p-5">
              <p className="text-[#2f3a2f]/90">{q}</p>
              <p className="mt-3 text-sm text-[#2f3a2f]/60">— Verified Client</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

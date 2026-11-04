import { ticket } from "@/content/site";

/** Plain stat row under the hero intro: TBA/Offerbased numbers. */
export default function Ticket() {
  const fields = [...ticket.fields, { label: "Commits", value: ticket.serial.replace(" commits", "") }];
  return (
    <figure className="stats">
      <figcaption className="stats-title">{ticket.subtitle}</figcaption>
      <dl className="stats-fields">
        {fields.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

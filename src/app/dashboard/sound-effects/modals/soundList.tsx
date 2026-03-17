import { SoundGroup } from "../types";

interface SoundListProps {
  groups: SoundGroup[];
  selected: string;
  onSelect: (id: string) => void;
  search: string;
}

export function SoundList({ groups, selected, onSelect, search }: SoundListProps) {
  const filtered = groups
    .map((g) => ({
      ...g,
      items: g.items.filter((item: any) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="flex flex-col gap-4">
      {filtered.map((group) => (
        <div key={group.heading} className="flex flex-col gap-1">
          <p className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-1">
            {group.heading}
          </p>
          {group.items.map((item: any) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`
                text-left text-sm px-2 py-1 rounded-md transition-colors duration-100
                ${selected === item.id
                  ? "text-white bg-white/10"
                  : "text-white/55 hover:text-white/80 hover:bg-white/[0.05]"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
// Flat vector people for slide 6, drawn in the same palette as the slide 2–3
// airport illustrations: the visiting mother in her mustard coat and red
// shawl, and the young companion in the blue jacket.
const C = {
  skinOld: '#a8704a',
  skin: '#b07b46',
  hairWhite: '#ece8df',
  hairDark: '#2b1f18',
  coat: '#e0a33e',
  shawl: '#c75046',
  trousersOld: '#9a4a45',
  shoe: '#4a3b33',
  kurta: 'var(--bw-teal-500)',
  kurtaShade: 'var(--bw-teal-700)',
  trousers: '#2f3e56',
  jacket: '#3e76b3',
  jacketShade: '#2f5f93',
  shirt: '#e6ab39',
  jeans: '#34476b',
  sneaker: '#f3efe6',
  suitcase: '#9d6332',
  suitcaseDark: '#7c4c24',
  roller: '#c75046',
  rollerDark: '#a03d34',
  ink: '#2b2622',
};

function Face({ cx, cy, glasses = false }) {
  return (
    <g>
      {glasses ? (
        <g fill="none" stroke={C.ink} strokeWidth="1.6">
          <circle cx={cx - 6} cy={cy} r="4.6" />
          <circle cx={cx + 6} cy={cy} r="4.6" />
          <path d={`M${cx - 1.4} ${cy} h2.8`} />
        </g>
      ) : (
        <g fill={C.ink}>
          <circle cx={cx - 5.5} cy={cy} r="1.7" />
          <circle cx={cx + 5.5} cy={cy} r="1.7" />
        </g>
      )}
      <path d={`M${cx - 4.5} ${cy + 8} Q${cx} ${cy + 12} ${cx + 4.5} ${cy + 8}`} fill="none" stroke={C.ink} strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

// A visiting mother with her adult daughter, and the mother's suitcase.
export function FamilyFigure({ size = 240, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 240 240" aria-hidden="true">
      <circle cx="120" cy="124" r="108" fill="var(--bw-teal-100)" />
      <ellipse cx="118" cy="222" rx="86" ry="7" fill="var(--bw-teal-900)" opacity="0.08" />

      {/* suitcase */}
      <rect x="30" y="170" width="30" height="46" rx="5" fill={C.suitcase} />
      <path d="M38 170v-7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v7" fill="none" stroke={C.suitcaseDark} strokeWidth="3" />
      <path d="M38 176v34M52 176v34" stroke={C.suitcaseDark} strokeWidth="2.4" />

      {/* mother */}
      <rect x="77" y="176" width="9" height="40" rx="3" fill={C.trousersOld} />
      <rect x="92" y="176" width="9" height="40" rx="3" fill={C.trousersOld} />
      <ellipse cx="81" cy="217" rx="8" ry="4" fill={C.shoe} />
      <ellipse cx="97" cy="217" rx="8" ry="4" fill={C.shoe} />
      <path d="M68 112Q70 100 89 98Q108 100 110 112L115 184Q89 191 63 184Z" fill={C.coat} />
      <path d="M70 106Q64 146 67 182L76 182Q75 142 83 104Z" fill={C.shawl} />
      <path d="M76 100Q89 111 103 100L101 95Q89 104 78 95Z" fill={C.shawl} />
      <path d="M72 116L66 150L73 152L80 120Z" fill={C.coat} />
      <circle cx="69" cy="153" r="5" fill={C.skinOld} />
      <rect x="84" y="86" width="10" height="12" fill={C.skinOld} />
      <circle cx="89" cy="76" r="17" fill={C.skinOld} />
      <path d="M72 76Q71 57 89 57Q107 57 106 74Q100 64 89 64Q78 64 72 76Z" fill={C.hairWhite} />
      <circle cx="75" cy="63" r="7.5" fill={C.hairWhite} />
      <Face cx={89} cy={78} glasses />

      {/* daughter */}
      <rect x="138" y="154" width="11" height="60" rx="4" fill={C.trousers} />
      <rect x="153" y="154" width="11" height="60" rx="4" fill={C.trousers} />
      <ellipse cx="143" cy="216" rx="9" ry="4" fill={C.ink} />
      <ellipse cx="159" cy="216" rx="9" ry="4" fill={C.ink} />
      <path d="M130 42Q151 34 170 44L174 94Q168 100 162 94L160 62Q151 56 142 62L140 94Q134 100 127 94Z" fill={C.hairDark} />
      <path d="M131 94Q133 83 151 81Q169 83 171 94L176 162Q151 169 126 162Z" fill={C.kurta} />
      <path d="M151 81Q169 83 171 94L176 162Q163 166 151 166Z" fill={C.kurtaShade} opacity="0.25" />
      {/* arm around her mother */}
      <path d="M136 96Q120 98 105 106L108 115Q122 108 139 108Z" fill={C.kurta} />
      <circle cx="104" cy="111" r="5.5" fill={C.skin} />
      <path d="M167 98L174 142L167 144L161 102Z" fill={C.kurta} />
      <circle cx="171" cy="146" r="5.5" fill={C.skin} />
      <rect x="146" y="72" width="10" height="12" fill={C.skin} />
      <circle cx="151" cy="62" r="17" fill={C.skin} />
      <path d="M134 60Q137 42 151 42Q166 42 168 60Q159 50 147 52Q139 54 134 60Z" fill={C.hairDark} />
      <Face cx={151} cy={64} />
    </svg>
  );
}

// A student flying home: backpack, roller case and a wave.
export function StudentFigure({ size = 240, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 240 240" aria-hidden="true">
      <circle cx="120" cy="124" r="108" fill="var(--bw-peach)" />
      <ellipse cx="116" cy="222" rx="80" ry="7" fill="var(--bw-teal-900)" opacity="0.08" />

      {/* a plane on its way home */}
      <g transform="translate(196 48) rotate(-30)" fill="var(--bw-orange-ink)">
        <path d="M-14 0L10 -2.4L16 0L10 2.4Z" />
        <path d="M-1 -1.6L-8 -11L-4 -11L6 -1.6Z" />
        <path d="M-1 1.6L-8 11L-4 11L6 1.6Z" />
        <path d="M-12 -0.8L-16 -6L-13.5 -6L-9 -0.8Z" />
      </g>

      {/* roller case */}
      <path d="M71 158V140M83 158V140M69 140H85" fill="none" stroke="#8a8f91" strokeWidth="3" strokeLinecap="round" />
      <rect x="60" y="158" width="34" height="54" rx="6" fill={C.roller} />
      <path d="M68 166v38M86 166v38" stroke={C.rollerDark} strokeWidth="2.4" />
      <circle cx="67" cy="215" r="3.5" fill={C.ink} />
      <circle cx="87" cy="215" r="3.5" fill={C.ink} />

      {/* backpack behind */}
      <rect x="136" y="96" width="20" height="52" rx="7" fill={C.shirt} />

      {/* student */}
      <rect x="106" y="150" width="12" height="62" rx="4" fill={C.jeans} />
      <rect x="122" y="150" width="12" height="62" rx="4" fill={C.jeans} />
      <ellipse cx="110" cy="215" rx="10" ry="4.5" fill={C.sneaker} stroke="#d8d0c2" strokeWidth="1" />
      <ellipse cx="130" cy="215" rx="10" ry="4.5" fill={C.sneaker} stroke="#d8d0c2" strokeWidth="1" />
      <path d="M98 98Q100 86 120 84Q140 86 142 98L146 158Q120 164 94 158Z" fill={C.jacket} />
      <path d="M114 87L126 87L124 152L116 152Z" fill={C.shirt} />
      <path d="M101 94L106 94L108 144L103 144Z" fill={C.shirt} />
      {/* arm to the case handle */}
      <path d="M102 100L82 138L89 142L109 106Z" fill={C.jacketShade} />
      <circle cx="84" cy="141" r="5.5" fill={C.skin} />
      {/* waving arm */}
      <path d="M137 98L158 60L166 64L145 104Z" fill={C.jacket} />
      <circle cx="163" cy="57" r="6" fill={C.skin} />
      <rect x="115" y="72" width="10" height="13" fill={C.skin} />
      <circle cx="120" cy="62" r="17" fill={C.skin} />
      <path d="M103 60Q102 42 120 42Q138 42 137 58Q130 50 120 51Q110 51 103 60Z" fill={C.hairDark} />
      <Face cx={120} cy={64} />
    </svg>
  );
}

export default function DeadpoolMascot() {
  return (
    <svg className="deadpool-mascot" viewBox="0 0 320 320" role="img" aria-labelledby="deadpool-title">
      <title id="deadpool-title">Маска Дэдпула</title>
      <defs>
        <clipPath id="mask-clip"><circle cx="160" cy="160" r="145" /></clipPath>
        <pattern id="mask-dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="#fff" opacity=".16" />
        </pattern>
      </defs>
      <circle cx="160" cy="160" r="151" fill="#171719" />
      <circle cx="160" cy="160" r="145" fill="#d91e28" />
      <g clipPath="url(#mask-clip)">
        <path d="M17 95Q91 12 160 15t143 80v-100H17z" fill="#ef3039" opacity=".55" />
        <circle cx="160" cy="160" r="145" fill="url(#mask-dots)" />
        <path d="M77 49c-35 9-55 50-57 109-2 64 17 110 53 116 40 7 66-37 66-111S116 39 77 49z" fill="#101012" />
        <path d="M243 49c35 9 55 50 57 109 2 64-17 110-53 116-40 7-66-37-66-111S204 39 243 49z" fill="#101012" />
        <path d="M46 134 127 157c-7 25-25 42-46 43-26 1-40-22-35-66z" fill="#fff" />
        <path d="m274 134-81 23c7 25 25 42 46 43 26 1 40-22 35-66z" fill="#fff" />
        <path d="M26 270q134 38 268 0v60H26z" fill="#b9141d" opacity=".55" />
      </g>
      <path d="m271 45 13-13m-1 28 19-5" stroke="#ffc72c" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

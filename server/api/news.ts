export default defineEventHandler(() => {
  return [
    {
      title: "Новий проєкт у Києві",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX/AAD/////8vL/9fX/6Oj/+/v/qqr/V1f/j4//lpb/LCz/1NT/sLD/cXH/wMD/vLz/TU3/FRX/HBz/fHz/Z2f/X1//Njb/7e3/4OD/ior/2tr/y8v/oaH/t7f/Pz//d3f/RUX/g4P/JCTIvoaZAAAIeUlEQVR4nO2bW6OyKhCGPWZZaqaZZQfr///IDZbDIIdqfdTuYt6rtQqJB2GYGcDzSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRPqe1lnzYsl0m9w+2hS7kv0xbwNJHf5+m++CMAyC6Ng/qSmdR8FQdHk1lViF91+Itp63j+5/h0cnHN55f4h9VUuEckCfd2tLXeUMVRXP9TDF4/sg8bx5+Phn9u8gZXPFDdXDzCbfLIxjaNvKJVsd+IdgyvUxMKAImHLK4vuFYfJk0bRkeCm/BGNDAZiNysKGmpam3qklw71C8wmY87xVf1uFmWu/7DZqhal2wAbXKc0HYLa5FWWEWRuIV2qNemw/qj8NU+7trwVgZjpDxxQrhncT6kv6Xf9ZmHSmmy27CGlX8II9GjrdvjqKLlAM1QVVNKv2heiFozwmHcOk+bS/o25+2a4lnXnJK8zpqGKTvuyP8ORpUukSKit61vq0hn4IZW63MOVkusRFlqaqCeVaQWdXj2cXI02UyUUB+/CoKoXXeJJejVuYTkIJzGsggoEJv4GeKCT+HiqE97CGj5KPwUgsu8W9SeWtSarFSug0xy3nLybd+bmHVnnZW9mONbbsNVz94IK7osXcLmHgF5jCfJgZt35fKBahxTB8TC38+0SBVVQyUwCzKr10+bDIYOAWn4GpUHuj4TfSbKWzqksFhs2WHfv9M8zsBerwKYx/YqN3P34Yo1njDiZBLkfLO29Tn/QLhBbGz8vHH0MFaC4oMAF7ZAMmDtk+ZzANmjBL3pR+pnGoLDB88txEE0WHKzB+lzJ3bWxrLLidwYhlwl9yq1OL1eE1mGGi1GMtsXBVVBj/it1UEeu5gkHxxoF3VaX47E9hYj7Pxub4BxvMrkTDOgT/xxXMEZo6GJuLyZ2ywAy9cINSFwuMz0LhEn5yeXYLI15MyNeIi8GJvEs1zY/i3NUCDzm0wfjMoK1H2xePUb4jGPFiuHHpZZa4zY/VtgYlJphwyzoczMbYRC0MnyhzsH21S5gEXsyhx+0ZSPaacEsP4+fcTMGjvQXG57YP/J+TSxixhPEnT4hldCNfg/Ez3MTOBsPH6mXsteDiDqaB3z8wb/4i/JdQFwTbYFr2arZgpioLzDBRoNv4K3UEs43RL6Ri9QzM+TcDDJ8oG5iAh9QM40fMhq1hAdi7ginn+AdE1BUv9KGMDSZsFDNlgIl57AArJ5+rTmBEIMIc+Rsse4ND+C7MEAvA/4e1GWZY0FJ4NcfSDUwDk6TG6bqlLdtqhPGZeT5Dk2elGcbPG+Sqh70bmPNYYVDeY5P7P3vbM2YY7sfAUN3VFpjBj4EZ2rmBuaD6hGHr0r/B8DBT5BKKxgzjL3vUkyyodgEDs5DN10TxMd6F8dsG52MzC8xgwyC+jZzAQDcmyCvTpulfghkWXmGmmsQMw8PTDfw33ziAgWFb8oTDQ0v7MxaYwUxtwI5UFpjBQIANCPpxEf0HGHDMPAQzzeS9AeMXG1RRBI3VwHDb14yfxbkDGLDMnjBmT6aMHSaocBdB+3UwXYmCp3B8nf8AA3XxtOQIs7A/Y4XxuzOyyCAdDI+g09P0w5+C8eclsitWGB5B19MY/SeGWQt/9CzEm4beGCaG9q80+4k/YQD2kAXkETQ4ExqYAEKooEeu6b/DuDPNWTY+Hvc4wamBOUsx3GSg/sSiWUmulgdoKkyYgoHgtm8jz6WfcGcqr4QGJYqZkmCaUorhMil9+hOOZoXyPBErlUk7CDKMyKIM/Vbgkj8RAvDFEmwYe36Dd0mmMHKa/YxfzU8EZxzmCi06T06ZTGH6Dn0j2b4PhM2rt8NmDnODJvJd6QVabKYwXgUxHN8FRa/mAwmN8O2ExpBbysZW8H2YBpkpBQbtgqbSZtdPpJoGmBvYMJ51q4QNUGBEii3mWUDB/eUkYGmGERNlSMKLvlFhRJi5ZP8nsHJ+Kj170T9xs8B40maFaKIGJoUxPccu2pcT57DI6WDW4E5KOVgNDNoB2aAE50e3NIpjVWNlKxiKOhjRkGHnaiyrgxFeLv/hqxOYtzabJGlhhHnmWdGxiVoYcX6DGbRz5wLmrW3A5zBiFIbITGlhxCjkmxxV6ALmnQ3aF2BEE/k5x8QG00C/VZDT/OLW+SswPRgRFuSXJwuM8GP45s7dm/rioYZXYEQTI77JsbPANBDD8WavYgcwuuMm+QszxwTjic2KMU9igPGq8fHdlvVh6wJGcxCoQSbYpHaLhiiGgY1aHkEPK48JpsGO7tAzXzyiJYkvDzBCpd1cmHQ8gt7HQy62ASuHzz+DAzVsB7NXGjo4PCfNeenw3HFlED83Lra/pPOMYgWph/MY/JRAA0cf9d2Ys2WJAXN88G2+cKwRCUZJLB9UFkErfAROYCuVTMRBtfGjHlyiJ+lIo3QHTm/moGbQbSU2zuXYtIG1q3h8koJFmWSyYNaNjq1Id5hOIjyX9ihwNjkKLOmC3mY+uQggTEqx5meAxQvwJ3dOxC5odL0fLAbsQ+L9VS8c0pYklZ7eihFmyo9m1fWEOmqa+rmKirp5tUDpw/zPLC8dnzeJW2lZW5NTpLZwZSgZmK5BvaanFxtMOiqzq1wYll116Kj7A3d1T6bsMz27cmKQLjWFrAOWztr2Wu8pmN7keF/2y0B6KRdIBqWFpqj+xpB2TP7ZlCFZr2lptVMmzF23o1LUdNEuUe8MWbOqb+CYL9Dp1J2NNU3D1sJY9Dx5jaEhm/InGa42KopVO4ZVYksVWa1Thmdrbk3d/0WaS6ey2mL+9P7s7Xi43zftsmdF6/ES6+rVW7n/h5p6+2JPl+vaPGhJJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEeqr/AKSMl2XdGm3rAAAAAElFTkSuQmCC",
      text: "Будівництво нового офісного центру...",
      date: "2025-03-09",
    },
    {
      title: "Розвиток інфраструктури",
      picture:
        "data:image/png;base64,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",
      text: "Заплановано будівництво нового мосту...",
      date: "2025-03-08",
    },
  ];
});

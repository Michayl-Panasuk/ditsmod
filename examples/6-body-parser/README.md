## Preconditions

If you haven't prepared the examples repository yet, you can do so:

```bash
git clone git@github.com:ts-stack/ditsmod.git
cd ditsmod
npm i
```

## Nested routes

Check from first terminal:

```bash
npm run start6
```

From second terminal:

```bash
curl -isS localhost:8080 -d '{"one":1}' -H 'content-type: application/json'
```

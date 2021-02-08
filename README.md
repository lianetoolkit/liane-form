# Liane Forms

Embed Liane Forms

---

## Installation

```
$ npm install --save @lianetoolkit/form
```

## Usage

Edit and insert the following `<div />` where you'd like the form to be displayed:

```html
<div
  class="liane-form"
  data-url="https://my-liane-server.com"
  data-campaignId="{my-campaign-id}"
></div>
```

### Compact mode

```html
<div
  class="liane-form"
  data-url="https://my-liane-server.com"
  data-campaignId="{my-campaign-id}"
  data-compact="true"
></div>
```

Place the script once inside `<head>` or right before the `</body>` closing tag:

```html
<script src="liane-form.js"></script>
```

## Build

```
$ git clone https://github.com/liane-toolkit/liane-form.git
$ cd liane-form
$ npm run build
```

The final script will be located at `lib/liane-form.js`.

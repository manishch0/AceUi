---
sidebar_position: 1
---

# Button

```jsx title="example.js"
import { useState } from "react";
import Button from "AceUi";

export default function MyReactPage() {
  const [count, setCount] = useState(1);
  return (
    <>
      <Button onClick={() => setCount((s) => s++)}>Hello React</Button>
    </>
  );
}
```

view source code [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

### Button Props

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).

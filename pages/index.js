import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const script = `
  <script type="text/javascript">
    window.ymConfig = { bot: "x1665474087516", host: "https://alpha9.yellowmessenger.com", payload: {} }
    ;(function () {
      var w = window,
        ic = w.YellowMessenger
      if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig)
      else {
        var d = document,
          i = function () {
            i.c(arguments)
          }
        function l() {
          var e = d.createElement("script")
          ;(e.type = "text/javascript"), (e.async = !0), (e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js")
          var t = d.getElementsByTagName("script")[0]
          t.parentNode.insertBefore(e, t)
        }
        ;(i.q = []),
          (i.c = function (e) {
            i.q.push(e)
          }),
          (w.YellowMessenger = i),
          l()
      }
    })()
  </script>
  `;
  
  return (
<div className="container">
  <head>
    <title>Next.js Starter!</title>
    <link rel="icon" href="/favicon.ico" />
            <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: script }}
        />
  </head>

  <main>
    <header title="Welcome to my app!" />
    <p className="description">Get started by editing <code>pages/index.js</code></p>
  </main>

  <footer />
</div>
  )
}

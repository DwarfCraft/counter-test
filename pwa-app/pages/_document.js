import Document, {Html, Head, Main, NextScript} from "next/document";

class PWADocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="../public/manifest.webmanifest" />
                    <link rel="apple-touch-icon" href="../public/icon-192x192.png" />
                    <meta name="theme-color" content="#fff" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default PWADocument;

import '@styles/globals.css';

export const metadata = {
    title: 'Notable',
    description: 'Create and discover new way of AI searching tools'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/> {/*changing the background's homepage*/}
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;
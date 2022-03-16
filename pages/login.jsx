import { getProviders, signIn } from 'next-auth/react'

const imageUrl = 'https://i.imgur.com/fPuEa9V.png'

function Login({ providers }) {
    return (
        <div
            className="flex flex-col items-center bg-black 
        min-h-screen w-full justify-center"
        >
            <img src={imageUrl} alt="logo spotify" className="w-52 mb-5" />
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button
                        className="bg-[#18D860] text-white p-5 rounded-full"
                        onClick={() => signIn(provider.id)}
                    >
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Login

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers,
        },
    }
}

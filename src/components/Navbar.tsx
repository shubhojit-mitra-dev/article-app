import { SignedIn, SignedOut, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';

export default function Navbar() {
    const router = useRouter();
    const { isLoaded, isSignedIn } = useAuth();

    const handleGetStarted =  () => {
        if (!isLoaded) return; // Wait for auth to load
        if (isSignedIn) {
            router.push("/dashboard");
        } else {
            router.push("/sign-in");
        }
    };
    return (
        <div>
            <Button
                onClick={handleGetStarted}
                className="bg-slate-700 bg-transparent backdrop-blur-md rounded-2xl"
            >
                <SignedOut>
                    Get Started
                </SignedOut>
                <SignedIn>
                    Dashboard
                </SignedIn>
            </Button>
        </div>
    )
}

import Card from "../components/card";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={"w-full"}>
                <h2>Dailies - Did you Remember To:</h2>

                <div>
                    <Card title={"Make Bed"}/>
                    <Card title={"Make Tea"}/>
                    <Card title={"Stretch"}/>
                    <Card title={"Shower"}/>
                    <Card title={"Brush Teeth"}/>
                    <Card title={"Make Something to Eat"}/>
                    <Card title={"Take Meds/Vitamins (as needed)"}/>
                    <Card title={"Go For a Walk"}/>
                </div>
            </div>
        </main>
    );
}

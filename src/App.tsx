import { useState } from 'react'
import Counter from './Counter'
import TrafficLight, { TrafficLightState } from './TrafficLight'

export default function App() {
    const [state, setState] = useState<TrafficLightState>({ value: 0, label: 'Red' })
    const [clicks, setClicks] = useState(0)

    function onWorkingCounterClick(newCount: number) {
        setClicks(clicks + 1)
        setNewState(newCount)
    }

    function onBrokenCounterClick() {
        setClicks(clicks + 1)
    }

    function setNewState(newCount: number) {
        const newStateValue = Math.abs(newCount % 3)

        switch (newStateValue) {
            case 0:
                setState({ value: newStateValue, label: 'Red' })
                break
            case 1:
                setState({ value: newStateValue, label: 'Yellow' })
                break
            case 2:
                setState({ value: newStateValue, label: 'Green' })
                break
        }
    }

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="flex max-w-screen-sm flex-col items-center">
                <span className="mb-4 text-4xl font-semibold">Traffic Light Operation Dashboard</span>
                <div className="h-fit w-full rounded-xl border bg-white px-6 py-3 shadow-sm">
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">Overview</span>
                        <span>
                            Congratulations! You are this city's Traffic Light Operator. Due to budgetary constraints we
                            cannot afford the newest AI-Powered Traffic Light. Because of that, it is your job to change
                            the lights on this one single traffic light.
                        </span>
                    </div>
                    <div className="flex flex-col pt-2">
                        <span className="text-lg font-semibold">Job requirements</span>
                        <span>Your job consists of two things:</span>
                        <ol className="list-decimal pl-8">
                            <li>Change the light every once in a while by using the counter</li>
                            <li>Meet some arbitrary click quota! (Gotta make sure you are doing your job!)</li>
                        </ol>
                    </div>
                    <div className="flex flex-col pt-2">
                        <span className="text-lg font-semibold">One Last Thing</span>
                        <span>
                            As I mentioned before, we have budgetary constraints. So when the old counter broke, we had
                            enough money to replace it but not enough to remove it. So while it doesn't change the
                            lights, it does contribute to the count.
                        </span>
                    </div>
                    <div className="flex pt-8">
                        <div className="w-1/2">
                            <div className="text-center">
                                <TrafficLight state={state} />
                                <div className="pt-2">
                                    <span>Total Clicks: {clicks}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex flex-col items-center gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-xl font-semibold">Working Counter</span>
                                    <Counter onClickCallback={onWorkingCounterClick} />
                                </div>

                                <div className="flex flex-col items-center gap-2">
                                    <span className="text-xl font-semibold">Broken Counter</span>
                                    <Counter onClickCallback={onBrokenCounterClick} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

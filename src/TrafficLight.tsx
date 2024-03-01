import { twMerge } from 'tailwind-merge'

interface LightProp {
    color: string
    enabled: boolean
}

export interface TrafficLightState {
    value: 0 | 1 | 2
    label: 'Green' | 'Yellow' | 'Red'
}

interface TrafficLightProps {
    state: TrafficLightState
}

const Light = ({ color, enabled }: LightProp) => {
    return (
        <div className="relative flex h-12 w-12 items-center justify-center">
            <div
                className={twMerge(
                    `absolute h-16 w-16 rounded-full bg-${color}-800 z-10 blur-sm`,
                    enabled ? 'visible' : 'invisible'
                )}
            />
            <div
                className={twMerge(
                    'absolute z-20 h-full w-full rounded-full',
                    enabled ? `bg-${color}-500 shadow border-${color}-400` : `bg-${color}-300`
                )}
            />
        </div>
    )
}

export default function TrafficLight({ state }: TrafficLightProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex w-fit flex-col gap-3 rounded-lg border-2 bg-gray-800 p-4">
                <Light color="red" enabled={state.value === 0} />
                <Light color="yellow" enabled={state.value === 1} />
                <Light color="green" enabled={state.value === 2} />
            </div>
            <div className="pt-4">
                <span className="text-xl font-semibold">{state.label} Light</span>
            </div>
        </div>
    )
}

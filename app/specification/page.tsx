'use client'
import { motion } from 'motion/react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type SpecItem = {
  label: string
  value: string | string[]
}

const GAMING_PC: SpecItem[] = [
  { label: 'Processor', value: 'Intel Core I5-13400F' },
  {
    label: 'Graphics',
    value: 'Palit GeForce RTX™ 3060 Ti Dual 8GB',
  },
  { label: 'Motherboard', value: 'Asrock B760M Chipset LGA 1700' },
  { label: 'Memory', value: 'Kingston HyperX FURY 8GB DDR4 2666MHz x 2' },
  {
    label: 'Storage',
    value: ['Apacer SSD 240GB Panther 2.5" SATA III', 'HGST HDD 1TB 2.5"', 'XPG Gammix S70 Pcie Gen 4x4 Blade SSD 1TB'],
  },
  { label: 'Power Supply', value: 'Aigo PSU 550W GP550 (80+ Bronze)' },
  { label: 'Cooling', value: 'Cooler Master MasterLiquid 240L ARGB' },
  { label: 'Chassis', value: 'Tecware Nexus M TG M-ATX (Black)' },
  { label: 'Laptop', value: 'Macbook Pro M4 14-inch 16gb 512gb' },

]

const PERIPHERALS: SpecItem[] = [
  {
    label: 'Mouse',
    value: [
      'HyperX Pulsefire Haste 2 Wireless Gaming Mouse',
      'Logitech M240 Silent Bluetooth Mouse',
    ],
  },
  {
    label: 'Keyboard',
    value: 'Keychron K12 Wireless Mechanical Keyboard',
  },
  {
    label: 'Mousepad',
    value: 'Aukey Gaming Mouse Pad',
  },
  {
    label: 'Audio',
    value: [
      'Logitech G333 Gaming Earphones',
      'SonicGear Titan 2 portable speaker',
    ],
  },
  {
    label: 'Display',
    value: [
      'ASUS VG27AQL1A (27" WQHD, 170Hz, 1ms response time)',
      'ACER Nitro VG240YE (24" FHD, 100hz, 1ms response time)',
    ],
  },
]

function SpecificationItem({ label, value }: SpecItem) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
      <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {label}
      </h3>
      {Array.isArray(value) ? (
        <div className="space-y-1">
          {value.map((item, index) => (
            <p
              key={index}
              className="text-base text-zinc-900 dark:text-zinc-100"
            >
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-base text-zinc-900 dark:text-zinc-100">{value}</p>
      )}
    </div>
  )
}

export default function Specification() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h1 className="mb-4 text-3xl font-medium">PC Specification</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          My development setup.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-2xl font-medium">Desktop</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {GAMING_PC.map((spec) => (
            <SpecificationItem key={spec.label} {...spec} />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h2 className="mb-5 text-2xl font-medium">Peripherals</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PERIPHERALS.map((spec) => (
            <SpecificationItem key={spec.label} {...spec} />
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

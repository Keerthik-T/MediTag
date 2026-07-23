import { create } from 'zustand'

const MOCK_PATIENTS = {
  'test-id-123': {
    id: 'test-id-123',
    name: 'Jane Doe',
    age: 34,
    gender: 'Female',
    bloodGroup: 'O-',
    emergencyContact: {
      name: 'John Doe',
      relation: 'Husband',
      phone: '+1 555-0198'
    },
    allergies: ['Penicillin', 'Latex'],
    conditions: ['Type 1 Diabetes'],
    medications: ['Insulin Glargine'],
    medicalRecordsUrl: 'https://example.com/records/jane-doe.pdf',
    abhaId: 'ABHA-1234-5678-9012'
  }
}

const useStore = create((set, get) => ({
  isOnline: true,
  hardwareConnected: false,
  toggleOnline: () => set((state) => ({ isOnline: !state.isOnline })),
  setHardwareConnected: (status) => set({ hardwareConnected: status }),
  patients: MOCK_PATIENTS,
  getPatient: (id) => get().patients[id] || null,
  addPatient: (patient) => set((state) => ({
    patients: { ...state.patients, [patient.id]: patient }
  }))
}))

export default useStore

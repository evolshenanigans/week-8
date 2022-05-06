import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "TAKUMI FUJIWARA'S TOYOTA AE86",
        model: "Toyota Sprinter Trueno 3door GT-APEX",
        description: "Takumi Fujiwara's Toyota Sprinter Trueno GT-APEX (AE86) (originally owned by Bunta Fujiwara), also known as The White Ghost of Akina.",
        year: '1983-85(ZENKI MODEL)',
        engine: '1.6L liter, 16 valve Bluetop 4A-GEU',
        max_speed: '150 HP 7800RPM',
        owner: 'Bunta Fujiwara, Takumi Fujiwara',
        weight: '940kg',
        spec_version: "SPEC. I",
        series: 'First Stage - Act 1 & 2'
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseEngine: (state, action) => { state.engine = action.payload},
        chooseMaxSpeed: (state, action) => { state.max_speed = action.payload},
        chooseOwner: (state, action) => { state.owner = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload},
        chooseSpec: (state, action) => { state.spec_version = action.payload},
        chooseSeries: (state, action) => { state.series = action.payload},
    }
})

//export reducers
export const reducer = rootSlice.reducer;
export const { chooseName, chooseModel, chooseDescription, chooseYear, chooseEngine, chooseMaxSpeed, chooseOwner, chooseWeight, chooseSeries, chooseSpec} = rootSlice.actions
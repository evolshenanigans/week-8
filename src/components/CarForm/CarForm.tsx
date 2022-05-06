import React from 'react';
import { useDispatch, useSelector, useStore} from 'react-redux'
import {useForm} from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName,
    chooseModel,
    chooseDescription,
    chooseEngine,
    chooseMaxSpeed,
    chooseYear,
    chooseOwners,
    chooseSeries,
    chooseSpec,
    chooseWeight } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps{
    id?: string;
    data?: {};
}

interface CarState{
    name: string;
    model: string;
    description: string;
    engine: string;
    max_speed: string;
    year: string;
    owners: string;
    series: string;
    spec_version: string;
    weight:string;
}

export const CarForm = (props: CarFormProps) =>{
    const dispatch = useDispatch();
    let {carData, getData} =useGetData();
    const store = useStore();

    //how to select your state as a variable
    const name = useSelector<CarState>(state => state.name)
    const model = useSelector<CarState>(state => state.model)

    const { register, handleSubmit} = useForm({})

    const onSubmit = async (data:any, event:any) =>{
        console.log(props.id)

        if ( props.id!){
            console.log(data)
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data.name}`)
            window.location.reload();
            event.target.reset()
        } else{
            dispatch(chooseName(data.name))
            dispatch(chooseModel(data.model))
            dispatch(chooseDescription(data.description))
            dispatch(chooseEngine(data.engine))
            dispatch(chooseMaxSpeed(data.max_speed))
            dispatch(chooseYear(data.year))
            dispatch(chooseOwners(data.owners))
            dispatch(chooseSeries(data.series))
            dispatch(chooseSpec(data.spec_version))
            dispatch(chooseWeight(data.weight))
            console.log(store.getState())
            await serverCalls.create(store.getState())
            window.location.reload();
            event.target.reset();
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Car Name</label>
                    <Input {...register('name')} name="name" placeholder="name" />
                </div>
                <div>
                    <label htmlFor="model">Car Model</label>
                    <Input {...register('model')} name="model" placeholder="#" />
                </div>
                <div>
                    <label htmlFor="description">Car Description</label>
                    <Input {...register('description')} name="description" placeholder="description" />
                </div>
                <div>
                    <label htmlFor="engine">Car Engine</label>
                    <Input {...register('engine')} name="engine" placeholder="engine" />
                </div>
                <div>
                    <label htmlFor="max_speed">Car Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="max_speed" />
                </div>
                <div>
                    <label htmlFor="year">Car year</label>
                    <Input {...register('year')} name="year" placeholder="year" />
                </div>
                <div>
                    <label htmlFor="owners">Car owners</label>
                    <Input {...register('owners')} name="owners" placeholder="owners" />
                </div>
                <div>
                    <label htmlFor="series">Series</label>
                    <Input {...register('series')} name="series" placeholder="series" />
                </div>
                <div>
                    <label htmlFor="spec_version">Car Spec</label>
                    <Input {...register('spec_version')} name="spec_version" placeholder="spec_version" />
                </div>
                <div>
                    <label htmlFor="weight">Car Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="weight" />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
 }
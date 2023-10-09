import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req,res){

    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();



        return NextResponse.json( {status:'Success',data: result} )
    }

    catch (e) {
        return NextResponse.json( {status:'fail',data: e} )
    }
    
    

    //insert one

    // let data = await prisma.brands.create({
    //     data:{brandName:'Orange', brandImg:'orange1234.png'}
    // })

    //insert many
    // await prisma.brands.createMany({
    //     data:[
    //         {brandName:'Orange', brandImg:'orange1234.png'},
    //         {brandName:'apple', brandImg:'apple.png'},
    //         {brandName:'candy', brandImg:'candy.png'},
    //         {brandName:'cola', brandImg:'cola.png'},
    //         {brandName:'lemon', brandImg:'lemon.png'}
    //     ]
    // })

    //Find Many
    // const list = await prisma.brands.findMany();

    //update query (one)
    // await prisma.brands.update({
    //     where:{id:18},
    //     data:{brandName:'pink', brandImg:'pink.png'}
    // })


    //Delete query
    // await prisma.brands.delete({
    //     where:{id:18}
    // })


    //Find
    // const brands = await prisma.brands.findMany();
    // console.log(brands);


    
}
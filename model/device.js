export class Device{

    id;
    name;
    description;
    serialNumber;

    getId(){
        return this.id;
    }

    setId(id)
    {
        this.id = id;
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name = name;
    }

    getDescription()
    {
        return this.description;
    }

    setDescription(description)
    {
        this.description = description;
    }

    getSerialnumber()
    {
        return this.serialnumber;
    }

    setSerialnumber(serialnumber)
    {
        this.serialnumber = serialnumber;
    }
}
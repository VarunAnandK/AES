## Laravel General Configuration
    1. Run "composer update" on root of the project
    2. open file "D:\Projects\ABS\CropSec\cropsec_api\vendor\laravel\framework\src\Illuminate\Database\Schema\Blueprint.php"
        Add below function 
        public function BaseEntity()
        {
            $this->bigIncrements("id")->index();
            $this->unsignedBigInteger("company_id")->default(0)->index();
            $this->boolean("status")->default(1);
            $this->unsignedBigInteger("created_by_id");
            $this->dateTime("created_on")->useCurrent();
            $this->unsignedBigInteger("updated_by_id")->nullable();
            $this->dateTime("updated_on")->useCurrent();
        }
## Angular General Configuration
	1. Run "npm i" on root of the project
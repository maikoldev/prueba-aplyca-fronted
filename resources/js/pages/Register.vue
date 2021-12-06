<template>
  <div class="flex items-center justify-center h-screen">
    <form class="w-6/12">
      <div class="form-group">
        <label for="" class="w-3/12 text-right pr-3">Nombre</label>
        <div class="w-7/12">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="" class="w-3/12 text-right pr-3">Apellido</label>
        <div class="w-7/12">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="" class="w-3/12 text-right pr-3">Correo</label>
        <div class="w-7/12">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="" class="w-3/12 text-right pr-3">Contraseña</label>
        <div class="w-7/12">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="form-group">
        <label for="" class="w-3/12 text-right pr-3">Verificar Contraseña</label>
        <div class="w-7/12">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="flex">
        <div class="w-3/12"></div>
        <div class="w-7/12">
          <button
            type="submit"
            class="
              px-5
              py-2
              bg-cornflower-blue
              hover:bg-navy-blue-dark
              text-black
              border-solid border-black border-2
              rounded-lg
              text-lg
            "
          >
            Registrate
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
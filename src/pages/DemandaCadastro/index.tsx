<main id="demanda_cadastro">

<section>
    <div class="container-grid">
        <div class="conteudo">
            <div class="cadastrar">
                <img src="../assets/images/bolinha_azul.svg" alt="">
                <h1>Demandas</h1>
            </div>
            <div class="buttons-grid">
                <a href="#" class="button-cadastrar">Cadastrar</a>
                <a href="../demanda_consulta/demanda_consulta.html" class="button-consultar">Consultar</a>
            </div>
            <div class="demanda">
                <span>Nome da Demanda</span>
                <div class="demanda-cadastrar input-icons">
                    <iconify-icon class="icon" icon="mdi:clipboard-edit-outline"
                        style="color: #474545;"></iconify-icon>
                    <input class="input-field" name="nome-demanda" type="text">
                </div>
            </div>
            <div class="datas">
                <div class="criacao">
                    <span>Criação</span>
                    <div class="data-conte input-icons">
                        <iconify-icon class="icon" icon="bx:calendar" style="color: #474545;"></iconify-icon>
                        <input class="input-field" name="criacao" type="date">
                    </div>
                </div>

                <div class="inicio">
                    <span>Ínicio</span>
                    <div class="data-conte input-icons">
                        <iconify-icon class="icon" icon="bx:calendar" style="color: #474545;"></iconify-icon>
                        <input class="input-field" name="criacao" type="date">
                    </div>
                </div>

                <div class="termino">
                    <span>Término</span>
                    <div class="data-conte input-icons">
                        <iconify-icon class="icon" icon="bx:calendar" style="color: #474545;"></iconify-icon>
                        <input class="input-field" name="criacao" type="date">
                    </div>
                </div>
            </div>
            <div class="objetivo-demanda">
                <span>Objetivo de demanda</span>
                <textarea class="objetivo-form" name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div class="progresso-demanda">
                <div class="orcamento-demanda">
                    <span>Orçamento de demanda</span>
                    <div class="data-conte">
                        <iconify-icon class="icon" icon="bx:calendar" style="color: #474545;"></iconify-icon>
                        <input class="input-field" name="criacao" type="date">
                    </div>
                </div>

                <div class="tempo-demanda">
                    <span>Tempo de demanda</span>
                    <div class="data-conte">
                        <iconify-icon class="icon" icon="bx:calendar" style="color: #474545;"></iconify-icon>
                        <input class="input-field" name="criacao" type="date">
                    </div>
                </div>

                <div class="select_status">
                    <span>Status da Demanda</span>
                    <div class="select-icons">
                        <iconify-icon class="icon" icon="el:ok-sign"></iconify-icon>
                        <select class="data-conte" name="status" id="">
                            <option value="">Aberto</option>
                            <option value="">Em andamento</option>
                            <option value="">Finalizado</option>
                        </select>
                    </div>
                </div>

            </div>
            <div class="footer-options">
                <a href="../squad_cadastro/squad_cadastro.html"><img src="../assets/images/btn_squad.svg"
                        alt=""></a>
                <div>
                    <a href=""><img src="../assets/images/btn_confirmar.svg" alt=""></a>
                    <a href=""><img src="../assets/images/btn_cancelar.svg" alt=""></a>
                </div>

            </div>





        </div>
    </div>
</section>
</main>
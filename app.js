angular.module('paymentApp', [])
    .controller('PaymentController', function($scope, $interval) {
        $scope.payment = {
            cardNumber: '',
            cardName: '',
            expiryMonth: '',
            expiryYear: '',
            cvv: ''

        };

        $scope.processPayment = function() {
            // Aqui você pode adicionar a lógica para processar o pagamento
            // Pode ser um serviço HTTP para enviar os dados do pagamento para um servidor, por exemplo
            console.log('Pagamento processado:', $scope.payment);
        };
    });

/**
 * Created by Roger on 2017/10/31.
 * @params addNode 添加的节点
 * @params nodeStr 节点字符串
 * @params addLimit 添加的记录数
 */

function pubOp(addNode, nodeStr, addLimit){

        var counter = $('a.delete-btn',addNode).length;
        if(counter <= (addLimit-1)){
            addNode.append(nodeStr);
            $('a.delete-btn').each(function(i,t){
                t.onclick = function() {
                    $(this).parents('.pubDel').remove();
                    --counter;
                }
            });
            ++counter;
        }else if(counter < 0){
            counter = 0;
        }else{
            counter = addLimit;
        }

}








echo '[' >  new-word
for line in $(cat word)
do 
    new=`echo $line | sed s#\n##g`
    echo  "'$new'," >> new-word
done
echo ']' >> new-word

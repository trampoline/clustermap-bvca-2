// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__15646__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15645 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15645,0,null);var body = cljs.core.nthnext.call(null,vec__15645,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15646 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15646__delegate.call(this,args);};
G__15646.cljs$lang$maxFixedArity = 0;
G__15646.cljs$lang$applyTo = (function (arglist__15647){
var args = cljs.core.seq(arglist__15647);
return G__15646__delegate(args);
});
G__15646.cljs$core$IFn$_invoke$arity$variadic = G__15646__delegate;
return G__15646;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15652(s__15653){return (new cljs.core.LazySeq(null,(function (){var s__15653__$1 = s__15653;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15653__$1);if(temp__4092__auto__)
{var s__15653__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15653__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15653__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15655 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15654 = 0;while(true){
if((i__15654 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15654);cljs.core.chunk_append.call(null,b__15655,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15656 = (i__15654 + 1);
i__15654 = G__15656;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15655),iter__15652.call(null,cljs.core.chunk_rest.call(null,s__15653__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15655),null);
}
} else
{var args = cljs.core.first.call(null,s__15653__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15652.call(null,cljs.core.rest.call(null,s__15653__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__15661(s__15662){return (new cljs.core.LazySeq(null,(function (){var s__15662__$1 = s__15662;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15662__$1);if(temp__4092__auto__)
{var s__15662__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15662__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15662__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15664 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15663 = 0;while(true){
if((i__15663 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__15663);cljs.core.chunk_append.call(null,b__15664,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__15665 = (i__15663 + 1);
i__15663 = G__15665;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15664),iter__15661.call(null,cljs.core.chunk_rest.call(null,s__15662__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15664),null);
}
} else
{var script = cljs.core.first.call(null,s__15662__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__15661.call(null,cljs.core.rest.call(null,s__15662__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__15666){
var scripts = cljs.core.seq(arglist__15666);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15671(s__15672){return (new cljs.core.LazySeq(null,(function (){var s__15672__$1 = s__15672;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15672__$1);if(temp__4092__auto__)
{var s__15672__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15672__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15672__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15674 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15673 = 0;while(true){
if((i__15673 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15673);cljs.core.chunk_append.call(null,b__15674,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15675 = (i__15673 + 1);
i__15673 = G__15675;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15674),iter__15671.call(null,cljs.core.chunk_rest.call(null,s__15672__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15674),null);
}
} else
{var style = cljs.core.first.call(null,s__15672__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15671.call(null,cljs.core.rest.call(null,s__15672__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__15676){
var styles = cljs.core.seq(arglist__15676);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to15677 = (function() { 
var link_to15677__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15677 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15677__delegate.call(this,url,content);};
link_to15677.cljs$lang$maxFixedArity = 1;
link_to15677.cljs$lang$applyTo = (function (arglist__15678){
var url = cljs.core.first(arglist__15678);
var content = cljs.core.rest(arglist__15678);
return link_to15677__delegate(url,content);
});
link_to15677.cljs$core$IFn$_invoke$arity$variadic = link_to15677__delegate;
return link_to15677;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15677);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15679 = (function() { 
var mail_to15679__delegate = function (e_mail,p__15680){var vec__15682 = p__15680;var content = cljs.core.nth.call(null,vec__15682,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15679 = function (e_mail,var_args){
var p__15680 = null;if (arguments.length > 1) {
  p__15680 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15679__delegate.call(this,e_mail,p__15680);};
mail_to15679.cljs$lang$maxFixedArity = 1;
mail_to15679.cljs$lang$applyTo = (function (arglist__15683){
var e_mail = cljs.core.first(arglist__15683);
var p__15680 = cljs.core.rest(arglist__15683);
return mail_to15679__delegate(e_mail,p__15680);
});
mail_to15679.cljs$core$IFn$_invoke$arity$variadic = mail_to15679__delegate;
return mail_to15679;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15679);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15684 = (function unordered_list15684(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15689(s__15690){return (new cljs.core.LazySeq(null,(function (){var s__15690__$1 = s__15690;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15690__$1);if(temp__4092__auto__)
{var s__15690__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15690__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15690__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15692 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15691 = 0;while(true){
if((i__15691 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15691);cljs.core.chunk_append.call(null,b__15692,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15693 = (i__15691 + 1);
i__15691 = G__15693;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15692),iter__15689.call(null,cljs.core.chunk_rest.call(null,s__15690__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15692),null);
}
} else
{var x = cljs.core.first.call(null,s__15690__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15689.call(null,cljs.core.rest.call(null,s__15690__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15684);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15694 = (function ordered_list15694(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15699(s__15700){return (new cljs.core.LazySeq(null,(function (){var s__15700__$1 = s__15700;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15700__$1);if(temp__4092__auto__)
{var s__15700__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15700__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15700__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15702 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15701 = 0;while(true){
if((i__15701 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15701);cljs.core.chunk_append.call(null,b__15702,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15703 = (i__15701 + 1);
i__15701 = G__15703;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15702),iter__15699.call(null,cljs.core.chunk_rest.call(null,s__15700__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15702),null);
}
} else
{var x = cljs.core.first.call(null,s__15700__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15699.call(null,cljs.core.rest.call(null,s__15700__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15694);
/**
* Create an image element.
*/
sablono.core.image15704 = (function() {
var image15704 = null;
var image15704__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15704__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15704 = function(src,alt){
switch(arguments.length){
case 1:
return image15704__1.call(this,src);
case 2:
return image15704__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15704.cljs$core$IFn$_invoke$arity$1 = image15704__1;
image15704.cljs$core$IFn$_invoke$arity$2 = image15704__2;
return image15704;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15704);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15705_SHARP_,p2__15706_SHARP_){return [cljs.core.str(p1__15705_SHARP_),cljs.core.str("["),cljs.core.str(p2__15706_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15707_SHARP_,p2__15708_SHARP_){return [cljs.core.str(p1__15707_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15708_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field15709 = (function() {
var hidden_field15709 = null;
var hidden_field15709__1 = (function (name){return hidden_field15709.call(null,name,null);
});
var hidden_field15709__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15709 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15709__1.call(this,name);
case 2:
return hidden_field15709__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15709.cljs$core$IFn$_invoke$arity$1 = hidden_field15709__1;
hidden_field15709.cljs$core$IFn$_invoke$arity$2 = hidden_field15709__2;
return hidden_field15709;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15709);
/**
* Creates a new text input field.
*/
sablono.core.text_field15710 = (function() {
var text_field15710 = null;
var text_field15710__1 = (function (name){return text_field15710.call(null,name,null);
});
var text_field15710__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15710 = function(name,value){
switch(arguments.length){
case 1:
return text_field15710__1.call(this,name);
case 2:
return text_field15710__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15710.cljs$core$IFn$_invoke$arity$1 = text_field15710__1;
text_field15710.cljs$core$IFn$_invoke$arity$2 = text_field15710__2;
return text_field15710;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15710);
/**
* Creates a new password field.
*/
sablono.core.password_field15711 = (function() {
var password_field15711 = null;
var password_field15711__1 = (function (name){return password_field15711.call(null,name,null);
});
var password_field15711__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15711 = function(name,value){
switch(arguments.length){
case 1:
return password_field15711__1.call(this,name);
case 2:
return password_field15711__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15711.cljs$core$IFn$_invoke$arity$1 = password_field15711__1;
password_field15711.cljs$core$IFn$_invoke$arity$2 = password_field15711__2;
return password_field15711;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15711);
/**
* Creates a new email input field.
*/
sablono.core.email_field15712 = (function() {
var email_field15712 = null;
var email_field15712__1 = (function (name){return email_field15712.call(null,name,null);
});
var email_field15712__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15712 = function(name,value){
switch(arguments.length){
case 1:
return email_field15712__1.call(this,name);
case 2:
return email_field15712__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15712.cljs$core$IFn$_invoke$arity$1 = email_field15712__1;
email_field15712.cljs$core$IFn$_invoke$arity$2 = email_field15712__2;
return email_field15712;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15712);
/**
* Creates a check box.
*/
sablono.core.check_box15713 = (function() {
var check_box15713 = null;
var check_box15713__1 = (function (name){return check_box15713.call(null,name,null);
});
var check_box15713__2 = (function (name,checked_QMARK_){return check_box15713.call(null,name,checked_QMARK_,"true");
});
var check_box15713__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15713 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15713__1.call(this,name);
case 2:
return check_box15713__2.call(this,name,checked_QMARK_);
case 3:
return check_box15713__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15713.cljs$core$IFn$_invoke$arity$1 = check_box15713__1;
check_box15713.cljs$core$IFn$_invoke$arity$2 = check_box15713__2;
check_box15713.cljs$core$IFn$_invoke$arity$3 = check_box15713__3;
return check_box15713;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15713);
/**
* Creates a radio button.
*/
sablono.core.radio_button15714 = (function() {
var radio_button15714 = null;
var radio_button15714__1 = (function (group){return radio_button15714.call(null,group,null);
});
var radio_button15714__2 = (function (group,checked_QMARK_){return radio_button15714.call(null,group,checked_QMARK_,"true");
});
var radio_button15714__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15714 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15714__1.call(this,group);
case 2:
return radio_button15714__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15714__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15714.cljs$core$IFn$_invoke$arity$1 = radio_button15714__1;
radio_button15714.cljs$core$IFn$_invoke$arity$2 = radio_button15714__2;
radio_button15714.cljs$core$IFn$_invoke$arity$3 = radio_button15714__3;
return radio_button15714;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15714);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15715 = (function() {
var select_options15715 = null;
var select_options15715__1 = (function (coll){return select_options15715.call(null,coll,null);
});
var select_options15715__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15724(s__15725){return (new cljs.core.LazySeq(null,(function (){var s__15725__$1 = s__15725;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15725__$1);if(temp__4092__auto__)
{var s__15725__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15725__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15725__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15727 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15726 = 0;while(true){
if((i__15726 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15726);cljs.core.chunk_append.call(null,b__15727,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15730 = x;var text = cljs.core.nth.call(null,vec__15730,0,null);var val = cljs.core.nth.call(null,vec__15730,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15715.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15732 = (i__15726 + 1);
i__15726 = G__15732;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15727),iter__15724.call(null,cljs.core.chunk_rest.call(null,s__15725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15727),null);
}
} else
{var x = cljs.core.first.call(null,s__15725__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15731 = x;var text = cljs.core.nth.call(null,vec__15731,0,null);var val = cljs.core.nth.call(null,vec__15731,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15715.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15724.call(null,cljs.core.rest.call(null,s__15725__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15715 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15715__1.call(this,coll);
case 2:
return select_options15715__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15715.cljs$core$IFn$_invoke$arity$1 = select_options15715__1;
select_options15715.cljs$core$IFn$_invoke$arity$2 = select_options15715__2;
return select_options15715;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15715);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15733 = (function() {
var drop_down15733 = null;
var drop_down15733__2 = (function (name,options){return drop_down15733.call(null,name,options,null);
});
var drop_down15733__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15733 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15733__2.call(this,name,options);
case 3:
return drop_down15733__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15733.cljs$core$IFn$_invoke$arity$2 = drop_down15733__2;
drop_down15733.cljs$core$IFn$_invoke$arity$3 = drop_down15733__3;
return drop_down15733;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15733);
/**
* Creates a text area element.
*/
sablono.core.text_area15734 = (function() {
var text_area15734 = null;
var text_area15734__1 = (function (name){return text_area15734.call(null,name,null);
});
var text_area15734__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15734 = function(name,value){
switch(arguments.length){
case 1:
return text_area15734__1.call(this,name);
case 2:
return text_area15734__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15734.cljs$core$IFn$_invoke$arity$1 = text_area15734__1;
text_area15734.cljs$core$IFn$_invoke$arity$2 = text_area15734__2;
return text_area15734;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15734);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15735 = (function file_upload15735(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15735);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15736 = (function label15736(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15736);
/**
* Creates a submit button.
*/
sablono.core.submit_button15737 = (function submit_button15737(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15737);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15738 = (function reset_button15738(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15738);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15739 = (function() { 
var form_to15739__delegate = function (p__15740,body){var vec__15742 = p__15740;var method = cljs.core.nth.call(null,vec__15742,0,null);var action = cljs.core.nth.call(null,vec__15742,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15739 = function (p__15740,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15739__delegate.call(this,p__15740,body);};
form_to15739.cljs$lang$maxFixedArity = 1;
form_to15739.cljs$lang$applyTo = (function (arglist__15743){
var p__15740 = cljs.core.first(arglist__15743);
var body = cljs.core.rest(arglist__15743);
return form_to15739__delegate(p__15740,body);
});
form_to15739.cljs$core$IFn$_invoke$arity$variadic = form_to15739__delegate;
return form_to15739;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15739);

//# sourceMappingURL=core.js.map
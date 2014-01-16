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
var G__34800__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__34799 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__34799,0,null);var body = cljs.core.nthnext.call(null,vec__34799,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__34800 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34800__delegate.call(this,args);};
G__34800.cljs$lang$maxFixedArity = 0;
G__34800.cljs$lang$applyTo = (function (arglist__34801){
var args = cljs.core.seq(arglist__34801);
return G__34800__delegate(args);
});
G__34800.cljs$core$IFn$_invoke$arity$variadic = G__34800__delegate;
return G__34800;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__34806(s__34807){return (new cljs.core.LazySeq(null,(function (){var s__34807__$1 = s__34807;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34807__$1);if(temp__4092__auto__)
{var s__34807__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34807__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34807__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34809 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34808 = 0;while(true){
if((i__34808 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__34808);cljs.core.chunk_append.call(null,b__34809,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__34810 = (i__34808 + 1);
i__34808 = G__34810;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34809),iter__34806.call(null,cljs.core.chunk_rest.call(null,s__34807__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34809),null);
}
} else
{var args = cljs.core.first.call(null,s__34807__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__34806.call(null,cljs.core.rest.call(null,s__34807__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__34815(s__34816){return (new cljs.core.LazySeq(null,(function (){var s__34816__$1 = s__34816;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34816__$1);if(temp__4092__auto__)
{var s__34816__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34816__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34816__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34818 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34817 = 0;while(true){
if((i__34817 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__34817);cljs.core.chunk_append.call(null,b__34818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__34819 = (i__34817 + 1);
i__34817 = G__34819;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34818),iter__34815.call(null,cljs.core.chunk_rest.call(null,s__34816__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34818),null);
}
} else
{var script = cljs.core.first.call(null,s__34816__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__34815.call(null,cljs.core.rest.call(null,s__34816__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__34820){
var scripts = cljs.core.seq(arglist__34820);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__34825(s__34826){return (new cljs.core.LazySeq(null,(function (){var s__34826__$1 = s__34826;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34826__$1);if(temp__4092__auto__)
{var s__34826__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34826__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34826__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34828 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34827 = 0;while(true){
if((i__34827 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__34827);cljs.core.chunk_append.call(null,b__34828,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__34829 = (i__34827 + 1);
i__34827 = G__34829;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34828),iter__34825.call(null,cljs.core.chunk_rest.call(null,s__34826__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34828),null);
}
} else
{var style = cljs.core.first.call(null,s__34826__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__34825.call(null,cljs.core.rest.call(null,s__34826__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__34830){
var styles = cljs.core.seq(arglist__34830);
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
sablono.core.link_to34831 = (function() { 
var link_to34831__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to34831 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to34831__delegate.call(this,url,content);};
link_to34831.cljs$lang$maxFixedArity = 1;
link_to34831.cljs$lang$applyTo = (function (arglist__34832){
var url = cljs.core.first(arglist__34832);
var content = cljs.core.rest(arglist__34832);
return link_to34831__delegate(url,content);
});
link_to34831.cljs$core$IFn$_invoke$arity$variadic = link_to34831__delegate;
return link_to34831;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34831);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34833 = (function() { 
var mail_to34833__delegate = function (e_mail,p__34834){var vec__34836 = p__34834;var content = cljs.core.nth.call(null,vec__34836,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to34833 = function (e_mail,var_args){
var p__34834 = null;if (arguments.length > 1) {
  p__34834 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to34833__delegate.call(this,e_mail,p__34834);};
mail_to34833.cljs$lang$maxFixedArity = 1;
mail_to34833.cljs$lang$applyTo = (function (arglist__34837){
var e_mail = cljs.core.first(arglist__34837);
var p__34834 = cljs.core.rest(arglist__34837);
return mail_to34833__delegate(e_mail,p__34834);
});
mail_to34833.cljs$core$IFn$_invoke$arity$variadic = mail_to34833__delegate;
return mail_to34833;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34833);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34838 = (function unordered_list34838(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__34843(s__34844){return (new cljs.core.LazySeq(null,(function (){var s__34844__$1 = s__34844;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34844__$1);if(temp__4092__auto__)
{var s__34844__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34844__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34844__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34846 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34845 = 0;while(true){
if((i__34845 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34845);cljs.core.chunk_append.call(null,b__34846,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34847 = (i__34845 + 1);
i__34845 = G__34847;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34846),iter__34843.call(null,cljs.core.chunk_rest.call(null,s__34844__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34846),null);
}
} else
{var x = cljs.core.first.call(null,s__34844__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34843.call(null,cljs.core.rest.call(null,s__34844__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34838);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34848 = (function ordered_list34848(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__34853(s__34854){return (new cljs.core.LazySeq(null,(function (){var s__34854__$1 = s__34854;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34854__$1);if(temp__4092__auto__)
{var s__34854__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34854__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34854__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34856 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34855 = 0;while(true){
if((i__34855 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34855);cljs.core.chunk_append.call(null,b__34856,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34857 = (i__34855 + 1);
i__34855 = G__34857;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34856),iter__34853.call(null,cljs.core.chunk_rest.call(null,s__34854__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34856),null);
}
} else
{var x = cljs.core.first.call(null,s__34854__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34853.call(null,cljs.core.rest.call(null,s__34854__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34848);
/**
* Create an image element.
*/
sablono.core.image34858 = (function() {
var image34858 = null;
var image34858__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image34858__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image34858 = function(src,alt){
switch(arguments.length){
case 1:
return image34858__1.call(this,src);
case 2:
return image34858__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34858.cljs$core$IFn$_invoke$arity$1 = image34858__1;
image34858.cljs$core$IFn$_invoke$arity$2 = image34858__2;
return image34858;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34858);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__34859_SHARP_,p2__34860_SHARP_){return [cljs.core.str(p1__34859_SHARP_),cljs.core.str("["),cljs.core.str(p2__34860_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__34861_SHARP_,p2__34862_SHARP_){return [cljs.core.str(p1__34861_SHARP_),cljs.core.str("-"),cljs.core.str(p2__34862_SHARP_)].join('');
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
sablono.core.hidden_field34863 = (function() {
var hidden_field34863 = null;
var hidden_field34863__1 = (function (name){return hidden_field34863.call(null,name,null);
});
var hidden_field34863__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field34863 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field34863__1.call(this,name);
case 2:
return hidden_field34863__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34863.cljs$core$IFn$_invoke$arity$1 = hidden_field34863__1;
hidden_field34863.cljs$core$IFn$_invoke$arity$2 = hidden_field34863__2;
return hidden_field34863;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34863);
/**
* Creates a new text input field.
*/
sablono.core.text_field34864 = (function() {
var text_field34864 = null;
var text_field34864__1 = (function (name){return text_field34864.call(null,name,null);
});
var text_field34864__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field34864 = function(name,value){
switch(arguments.length){
case 1:
return text_field34864__1.call(this,name);
case 2:
return text_field34864__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34864.cljs$core$IFn$_invoke$arity$1 = text_field34864__1;
text_field34864.cljs$core$IFn$_invoke$arity$2 = text_field34864__2;
return text_field34864;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34864);
/**
* Creates a new password field.
*/
sablono.core.password_field34865 = (function() {
var password_field34865 = null;
var password_field34865__1 = (function (name){return password_field34865.call(null,name,null);
});
var password_field34865__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field34865 = function(name,value){
switch(arguments.length){
case 1:
return password_field34865__1.call(this,name);
case 2:
return password_field34865__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34865.cljs$core$IFn$_invoke$arity$1 = password_field34865__1;
password_field34865.cljs$core$IFn$_invoke$arity$2 = password_field34865__2;
return password_field34865;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34865);
/**
* Creates a new email input field.
*/
sablono.core.email_field34866 = (function() {
var email_field34866 = null;
var email_field34866__1 = (function (name){return email_field34866.call(null,name,null);
});
var email_field34866__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field34866 = function(name,value){
switch(arguments.length){
case 1:
return email_field34866__1.call(this,name);
case 2:
return email_field34866__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34866.cljs$core$IFn$_invoke$arity$1 = email_field34866__1;
email_field34866.cljs$core$IFn$_invoke$arity$2 = email_field34866__2;
return email_field34866;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34866);
/**
* Creates a check box.
*/
sablono.core.check_box34867 = (function() {
var check_box34867 = null;
var check_box34867__1 = (function (name){return check_box34867.call(null,name,null);
});
var check_box34867__2 = (function (name,checked_QMARK_){return check_box34867.call(null,name,checked_QMARK_,"true");
});
var check_box34867__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box34867 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34867__1.call(this,name);
case 2:
return check_box34867__2.call(this,name,checked_QMARK_);
case 3:
return check_box34867__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34867.cljs$core$IFn$_invoke$arity$1 = check_box34867__1;
check_box34867.cljs$core$IFn$_invoke$arity$2 = check_box34867__2;
check_box34867.cljs$core$IFn$_invoke$arity$3 = check_box34867__3;
return check_box34867;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34867);
/**
* Creates a radio button.
*/
sablono.core.radio_button34868 = (function() {
var radio_button34868 = null;
var radio_button34868__1 = (function (group){return radio_button34868.call(null,group,null);
});
var radio_button34868__2 = (function (group,checked_QMARK_){return radio_button34868.call(null,group,checked_QMARK_,"true");
});
var radio_button34868__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button34868 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34868__1.call(this,group);
case 2:
return radio_button34868__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34868__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34868.cljs$core$IFn$_invoke$arity$1 = radio_button34868__1;
radio_button34868.cljs$core$IFn$_invoke$arity$2 = radio_button34868__2;
radio_button34868.cljs$core$IFn$_invoke$arity$3 = radio_button34868__3;
return radio_button34868;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34868);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34869 = (function() {
var select_options34869 = null;
var select_options34869__1 = (function (coll){return select_options34869.call(null,coll,null);
});
var select_options34869__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__34878(s__34879){return (new cljs.core.LazySeq(null,(function (){var s__34879__$1 = s__34879;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34879__$1);if(temp__4092__auto__)
{var s__34879__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34879__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34879__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34881 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34880 = 0;while(true){
if((i__34880 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__34880);cljs.core.chunk_append.call(null,b__34881,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34884 = x;var text = cljs.core.nth.call(null,vec__34884,0,null);var val = cljs.core.nth.call(null,vec__34884,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34869.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__34886 = (i__34880 + 1);
i__34880 = G__34886;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34881),iter__34878.call(null,cljs.core.chunk_rest.call(null,s__34879__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34881),null);
}
} else
{var x = cljs.core.first.call(null,s__34879__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34885 = x;var text = cljs.core.nth.call(null,vec__34885,0,null);var val = cljs.core.nth.call(null,vec__34885,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34869.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__34878.call(null,cljs.core.rest.call(null,s__34879__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options34869 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34869__1.call(this,coll);
case 2:
return select_options34869__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34869.cljs$core$IFn$_invoke$arity$1 = select_options34869__1;
select_options34869.cljs$core$IFn$_invoke$arity$2 = select_options34869__2;
return select_options34869;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34869);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34887 = (function() {
var drop_down34887 = null;
var drop_down34887__2 = (function (name,options){return drop_down34887.call(null,name,options,null);
});
var drop_down34887__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down34887 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34887__2.call(this,name,options);
case 3:
return drop_down34887__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34887.cljs$core$IFn$_invoke$arity$2 = drop_down34887__2;
drop_down34887.cljs$core$IFn$_invoke$arity$3 = drop_down34887__3;
return drop_down34887;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34887);
/**
* Creates a text area element.
*/
sablono.core.text_area34888 = (function() {
var text_area34888 = null;
var text_area34888__1 = (function (name){return text_area34888.call(null,name,null);
});
var text_area34888__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area34888 = function(name,value){
switch(arguments.length){
case 1:
return text_area34888__1.call(this,name);
case 2:
return text_area34888__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34888.cljs$core$IFn$_invoke$arity$1 = text_area34888__1;
text_area34888.cljs$core$IFn$_invoke$arity$2 = text_area34888__2;
return text_area34888;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34888);
/**
* Creates a file upload input.
*/
sablono.core.file_upload34889 = (function file_upload34889(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload34889);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34890 = (function label34890(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34890);
/**
* Creates a submit button.
*/
sablono.core.submit_button34891 = (function submit_button34891(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34891);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34892 = (function reset_button34892(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34892);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34893 = (function() { 
var form_to34893__delegate = function (p__34894,body){var vec__34896 = p__34894;var method = cljs.core.nth.call(null,vec__34896,0,null);var action = cljs.core.nth.call(null,vec__34896,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to34893 = function (p__34894,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to34893__delegate.call(this,p__34894,body);};
form_to34893.cljs$lang$maxFixedArity = 1;
form_to34893.cljs$lang$applyTo = (function (arglist__34897){
var p__34894 = cljs.core.first(arglist__34897);
var body = cljs.core.rest(arglist__34897);
return form_to34893__delegate(p__34894,body);
});
form_to34893.cljs$core$IFn$_invoke$arity$variadic = form_to34893__delegate;
return form_to34893;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34893);

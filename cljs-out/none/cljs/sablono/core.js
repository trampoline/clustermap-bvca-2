// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.render');
goog.require('sablono.render');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__15056__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15055 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15055,0,null);var body = cljs.core.nthnext.call(null,vec__15055,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15056 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15056__delegate.call(this,args);};
G__15056.cljs$lang$maxFixedArity = 0;
G__15056.cljs$lang$applyTo = (function (arglist__15057){
var args = cljs.core.seq(arglist__15057);
return G__15056__delegate(args);
});
G__15056.cljs$core$IFn$_invoke$arity$variadic = G__15056__delegate;
return G__15056;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__15062(s__15063){return (new cljs.core.LazySeq(null,(function (){var s__15063__$1 = s__15063;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15063__$1);if(temp__4092__auto__)
{var s__15063__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15063__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15063__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15065 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15064 = 0;while(true){
if((i__15064 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__15064);cljs.core.chunk_append.call(null,b__15065,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15066 = (i__15064 + 1);
i__15064 = G__15066;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15065),iter__15062.call(null,cljs.core.chunk_rest.call(null,s__15063__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15065),null);
}
} else
{var args = cljs.core.first.call(null,s__15063__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15062.call(null,cljs.core.rest.call(null,s__15063__$2)));
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
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__15071(s__15072){return (new cljs.core.LazySeq(null,(function (){var s__15072__$1 = s__15072;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15072__$1);if(temp__4092__auto__)
{var s__15072__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15072__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15072__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15074 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15073 = 0;while(true){
if((i__15073 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__15073);cljs.core.chunk_append.call(null,b__15074,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__15075 = (i__15073 + 1);
i__15073 = G__15075;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15074),iter__15071.call(null,cljs.core.chunk_rest.call(null,s__15072__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15074),null);
}
} else
{var script = cljs.core.first.call(null,s__15072__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__15071.call(null,cljs.core.rest.call(null,s__15072__$2)));
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
include_js.cljs$lang$applyTo = (function (arglist__15076){
var scripts = cljs.core.seq(arglist__15076);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__15081(s__15082){return (new cljs.core.LazySeq(null,(function (){var s__15082__$1 = s__15082;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15082__$1);if(temp__4092__auto__)
{var s__15082__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15082__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15082__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15084 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15083 = 0;while(true){
if((i__15083 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__15083);cljs.core.chunk_append.call(null,b__15084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15085 = (i__15083 + 1);
i__15083 = G__15085;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15084),iter__15081.call(null,cljs.core.chunk_rest.call(null,s__15082__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15084),null);
}
} else
{var style = cljs.core.first.call(null,s__15082__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15081.call(null,cljs.core.rest.call(null,s__15082__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__15086){
var styles = cljs.core.seq(arglist__15086);
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
sablono.core.link_to15087 = (function() { 
var link_to15087__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15087 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15087__delegate.call(this,url,content);};
link_to15087.cljs$lang$maxFixedArity = 1;
link_to15087.cljs$lang$applyTo = (function (arglist__15088){
var url = cljs.core.first(arglist__15088);
var content = cljs.core.rest(arglist__15088);
return link_to15087__delegate(url,content);
});
link_to15087.cljs$core$IFn$_invoke$arity$variadic = link_to15087__delegate;
return link_to15087;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15087);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15089 = (function() { 
var mail_to15089__delegate = function (e_mail,p__15090){var vec__15092 = p__15090;var content = cljs.core.nth.call(null,vec__15092,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15089 = function (e_mail,var_args){
var p__15090 = null;if (arguments.length > 1) {
  p__15090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15089__delegate.call(this,e_mail,p__15090);};
mail_to15089.cljs$lang$maxFixedArity = 1;
mail_to15089.cljs$lang$applyTo = (function (arglist__15093){
var e_mail = cljs.core.first(arglist__15093);
var p__15090 = cljs.core.rest(arglist__15093);
return mail_to15089__delegate(e_mail,p__15090);
});
mail_to15089.cljs$core$IFn$_invoke$arity$variadic = mail_to15089__delegate;
return mail_to15089;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15089);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15094 = (function unordered_list15094(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__15099(s__15100){return (new cljs.core.LazySeq(null,(function (){var s__15100__$1 = s__15100;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15100__$1);if(temp__4092__auto__)
{var s__15100__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15100__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15100__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15102 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15101 = 0;while(true){
if((i__15101 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15101);cljs.core.chunk_append.call(null,b__15102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15103 = (i__15101 + 1);
i__15101 = G__15103;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15102),iter__15099.call(null,cljs.core.chunk_rest.call(null,s__15100__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15102),null);
}
} else
{var x = cljs.core.first.call(null,s__15100__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15099.call(null,cljs.core.rest.call(null,s__15100__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15094);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15104 = (function ordered_list15104(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__15109(s__15110){return (new cljs.core.LazySeq(null,(function (){var s__15110__$1 = s__15110;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15110__$1);if(temp__4092__auto__)
{var s__15110__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15110__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15110__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15112 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15111 = 0;while(true){
if((i__15111 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15111);cljs.core.chunk_append.call(null,b__15112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15113 = (i__15111 + 1);
i__15111 = G__15113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15112),iter__15109.call(null,cljs.core.chunk_rest.call(null,s__15110__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15112),null);
}
} else
{var x = cljs.core.first.call(null,s__15110__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15109.call(null,cljs.core.rest.call(null,s__15110__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15104);
/**
* Create an image element.
*/
sablono.core.image15114 = (function() {
var image15114 = null;
var image15114__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15114__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15114 = function(src,alt){
switch(arguments.length){
case 1:
return image15114__1.call(this,src);
case 2:
return image15114__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15114.cljs$core$IFn$_invoke$arity$1 = image15114__1;
image15114.cljs$core$IFn$_invoke$arity$2 = image15114__2;
return image15114;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15114);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15115_SHARP_,p2__15116_SHARP_){return [cljs.core.str(p1__15115_SHARP_),cljs.core.str("["),cljs.core.str(p2__15116_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15117_SHARP_,p2__15118_SHARP_){return [cljs.core.str(p1__15117_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15118_SHARP_)].join('');
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
sablono.core.hidden_field15119 = (function() {
var hidden_field15119 = null;
var hidden_field15119__1 = (function (name){return hidden_field15119.call(null,name,null);
});
var hidden_field15119__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15119 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15119__1.call(this,name);
case 2:
return hidden_field15119__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15119.cljs$core$IFn$_invoke$arity$1 = hidden_field15119__1;
hidden_field15119.cljs$core$IFn$_invoke$arity$2 = hidden_field15119__2;
return hidden_field15119;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15119);
/**
* Creates a new text input field.
*/
sablono.core.text_field15120 = (function() {
var text_field15120 = null;
var text_field15120__1 = (function (name){return text_field15120.call(null,name,null);
});
var text_field15120__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15120 = function(name,value){
switch(arguments.length){
case 1:
return text_field15120__1.call(this,name);
case 2:
return text_field15120__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15120.cljs$core$IFn$_invoke$arity$1 = text_field15120__1;
text_field15120.cljs$core$IFn$_invoke$arity$2 = text_field15120__2;
return text_field15120;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15120);
/**
* Creates a new password field.
*/
sablono.core.password_field15121 = (function() {
var password_field15121 = null;
var password_field15121__1 = (function (name){return password_field15121.call(null,name,null);
});
var password_field15121__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15121 = function(name,value){
switch(arguments.length){
case 1:
return password_field15121__1.call(this,name);
case 2:
return password_field15121__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15121.cljs$core$IFn$_invoke$arity$1 = password_field15121__1;
password_field15121.cljs$core$IFn$_invoke$arity$2 = password_field15121__2;
return password_field15121;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15121);
/**
* Creates a new email input field.
*/
sablono.core.email_field15122 = (function() {
var email_field15122 = null;
var email_field15122__1 = (function (name){return email_field15122.call(null,name,null);
});
var email_field15122__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15122 = function(name,value){
switch(arguments.length){
case 1:
return email_field15122__1.call(this,name);
case 2:
return email_field15122__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15122.cljs$core$IFn$_invoke$arity$1 = email_field15122__1;
email_field15122.cljs$core$IFn$_invoke$arity$2 = email_field15122__2;
return email_field15122;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15122);
/**
* Creates a check box.
*/
sablono.core.check_box15123 = (function() {
var check_box15123 = null;
var check_box15123__1 = (function (name){return check_box15123.call(null,name,null);
});
var check_box15123__2 = (function (name,checked_QMARK_){return check_box15123.call(null,name,checked_QMARK_,"true");
});
var check_box15123__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15123 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15123__1.call(this,name);
case 2:
return check_box15123__2.call(this,name,checked_QMARK_);
case 3:
return check_box15123__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15123.cljs$core$IFn$_invoke$arity$1 = check_box15123__1;
check_box15123.cljs$core$IFn$_invoke$arity$2 = check_box15123__2;
check_box15123.cljs$core$IFn$_invoke$arity$3 = check_box15123__3;
return check_box15123;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15123);
/**
* Creates a radio button.
*/
sablono.core.radio_button15124 = (function() {
var radio_button15124 = null;
var radio_button15124__1 = (function (group){return radio_button15124.call(null,group,null);
});
var radio_button15124__2 = (function (group,checked_QMARK_){return radio_button15124.call(null,group,checked_QMARK_,"true");
});
var radio_button15124__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15124 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15124__1.call(this,group);
case 2:
return radio_button15124__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15124__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15124.cljs$core$IFn$_invoke$arity$1 = radio_button15124__1;
radio_button15124.cljs$core$IFn$_invoke$arity$2 = radio_button15124__2;
radio_button15124.cljs$core$IFn$_invoke$arity$3 = radio_button15124__3;
return radio_button15124;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15124);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15125 = (function() {
var select_options15125 = null;
var select_options15125__1 = (function (coll){return select_options15125.call(null,coll,null);
});
var select_options15125__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__15134(s__15135){return (new cljs.core.LazySeq(null,(function (){var s__15135__$1 = s__15135;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15135__$1);if(temp__4092__auto__)
{var s__15135__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15135__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15135__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15137 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15136 = 0;while(true){
if((i__15136 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__15136);cljs.core.chunk_append.call(null,b__15137,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15140 = x;var text = cljs.core.nth.call(null,vec__15140,0,null);var val = cljs.core.nth.call(null,vec__15140,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15125.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15142 = (i__15136 + 1);
i__15136 = G__15142;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15137),iter__15134.call(null,cljs.core.chunk_rest.call(null,s__15135__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15137),null);
}
} else
{var x = cljs.core.first.call(null,s__15135__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15141 = x;var text = cljs.core.nth.call(null,vec__15141,0,null);var val = cljs.core.nth.call(null,vec__15141,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15125.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15134.call(null,cljs.core.rest.call(null,s__15135__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options15125 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15125__1.call(this,coll);
case 2:
return select_options15125__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15125.cljs$core$IFn$_invoke$arity$1 = select_options15125__1;
select_options15125.cljs$core$IFn$_invoke$arity$2 = select_options15125__2;
return select_options15125;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15125);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15143 = (function() {
var drop_down15143 = null;
var drop_down15143__2 = (function (name,options){return drop_down15143.call(null,name,options,null);
});
var drop_down15143__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15143 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15143__2.call(this,name,options);
case 3:
return drop_down15143__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15143.cljs$core$IFn$_invoke$arity$2 = drop_down15143__2;
drop_down15143.cljs$core$IFn$_invoke$arity$3 = drop_down15143__3;
return drop_down15143;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15143);
/**
* Creates a text area element.
*/
sablono.core.text_area15144 = (function() {
var text_area15144 = null;
var text_area15144__1 = (function (name){return text_area15144.call(null,name,null);
});
var text_area15144__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area15144 = function(name,value){
switch(arguments.length){
case 1:
return text_area15144__1.call(this,name);
case 2:
return text_area15144__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15144.cljs$core$IFn$_invoke$arity$1 = text_area15144__1;
text_area15144.cljs$core$IFn$_invoke$arity$2 = text_area15144__2;
return text_area15144;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15144);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15145 = (function file_upload15145(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15145);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15146 = (function label15146(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15146);
/**
* Creates a submit button.
*/
sablono.core.submit_button15147 = (function submit_button15147(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15147);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15148 = (function reset_button15148(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15148);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15149 = (function() { 
var form_to15149__delegate = function (p__15150,body){var vec__15152 = p__15150;var method = cljs.core.nth.call(null,vec__15152,0,null);var action = cljs.core.nth.call(null,vec__15152,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15149 = function (p__15150,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15149__delegate.call(this,p__15150,body);};
form_to15149.cljs$lang$maxFixedArity = 1;
form_to15149.cljs$lang$applyTo = (function (arglist__15153){
var p__15150 = cljs.core.first(arglist__15153);
var body = cljs.core.rest(arglist__15153);
return form_to15149__delegate(p__15150,body);
});
form_to15149.cljs$core$IFn$_invoke$arity$variadic = form_to15149__delegate;
return form_to15149;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15149);

//# sourceMappingURL=core.js.map
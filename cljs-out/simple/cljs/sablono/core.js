// Compiled by ClojureScript 0.0-2322
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__37379__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__37378 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__37378,(0),null);var body = cljs.core.nthnext.call(null,vec__37378,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__37379 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__37379__delegate.call(this,args);};
G__37379.cljs$lang$maxFixedArity = 0;
G__37379.cljs$lang$applyTo = (function (arglist__37380){
var args = cljs.core.seq(arglist__37380);
return G__37379__delegate(args);
});
G__37379.cljs$core$IFn$_invoke$arity$variadic = G__37379__delegate;
return G__37379;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__37385(s__37386){return (new cljs.core.LazySeq(null,(function (){var s__37386__$1 = s__37386;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37386__$1);if(temp__4126__auto__)
{var s__37386__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37386__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37386__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37388 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37387 = (0);while(true){
if((i__37387 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__37387);cljs.core.chunk_append.call(null,b__37388,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__37389 = (i__37387 + (1));
i__37387 = G__37389;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37388),iter__37385.call(null,cljs.core.chunk_rest.call(null,s__37386__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37388),null);
}
} else
{var args = cljs.core.first.call(null,s__37386__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__37385.call(null,cljs.core.rest.call(null,s__37386__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__37394(s__37395){return (new cljs.core.LazySeq(null,(function (){var s__37395__$1 = s__37395;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37395__$1);if(temp__4126__auto__)
{var s__37395__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37395__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37395__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37397 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37396 = (0);while(true){
if((i__37396 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__37396);cljs.core.chunk_append.call(null,b__37397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__37398 = (i__37396 + (1));
i__37396 = G__37398;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37397),iter__37394.call(null,cljs.core.chunk_rest.call(null,s__37395__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37397),null);
}
} else
{var style = cljs.core.first.call(null,s__37395__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__37394.call(null,cljs.core.rest.call(null,s__37395__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__37399){
var styles = cljs.core.seq(arglist__37399);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to37400 = (function() { 
var link_to37400__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to37400 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to37400__delegate.call(this,url,content);};
link_to37400.cljs$lang$maxFixedArity = 1;
link_to37400.cljs$lang$applyTo = (function (arglist__37401){
var url = cljs.core.first(arglist__37401);
var content = cljs.core.rest(arglist__37401);
return link_to37400__delegate(url,content);
});
link_to37400.cljs$core$IFn$_invoke$arity$variadic = link_to37400__delegate;
return link_to37400;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37400);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to37402 = (function() { 
var mail_to37402__delegate = function (e_mail,p__37403){var vec__37405 = p__37403;var content = cljs.core.nth.call(null,vec__37405,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to37402 = function (e_mail,var_args){
var p__37403 = null;if (arguments.length > 1) {
  p__37403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to37402__delegate.call(this,e_mail,p__37403);};
mail_to37402.cljs$lang$maxFixedArity = 1;
mail_to37402.cljs$lang$applyTo = (function (arglist__37406){
var e_mail = cljs.core.first(arglist__37406);
var p__37403 = cljs.core.rest(arglist__37406);
return mail_to37402__delegate(e_mail,p__37403);
});
mail_to37402.cljs$core$IFn$_invoke$arity$variadic = mail_to37402__delegate;
return mail_to37402;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37402);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list37407 = (function unordered_list37407(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__37412(s__37413){return (new cljs.core.LazySeq(null,(function (){var s__37413__$1 = s__37413;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37413__$1);if(temp__4126__auto__)
{var s__37413__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37413__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37413__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37415 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37414 = (0);while(true){
if((i__37414 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37414);cljs.core.chunk_append.call(null,b__37415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__37416 = (i__37414 + (1));
i__37414 = G__37416;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37415),iter__37412.call(null,cljs.core.chunk_rest.call(null,s__37413__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37415),null);
}
} else
{var x = cljs.core.first.call(null,s__37413__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__37412.call(null,cljs.core.rest.call(null,s__37413__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37407);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list37417 = (function ordered_list37417(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__37422(s__37423){return (new cljs.core.LazySeq(null,(function (){var s__37423__$1 = s__37423;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37423__$1);if(temp__4126__auto__)
{var s__37423__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37423__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37423__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37425 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37424 = (0);while(true){
if((i__37424 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37424);cljs.core.chunk_append.call(null,b__37425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__37426 = (i__37424 + (1));
i__37424 = G__37426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37425),iter__37422.call(null,cljs.core.chunk_rest.call(null,s__37423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37425),null);
}
} else
{var x = cljs.core.first.call(null,s__37423__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__37422.call(null,cljs.core.rest.call(null,s__37423__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37417);
/**
* Create an image element.
*/
sablono.core.image37427 = (function() {
var image37427 = null;
var image37427__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image37427__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image37427 = function(src,alt){
switch(arguments.length){
case 1:
return image37427__1.call(this,src);
case 2:
return image37427__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image37427.cljs$core$IFn$_invoke$arity$1 = image37427__1;
image37427.cljs$core$IFn$_invoke$arity$2 = image37427__2;
return image37427;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37427);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__37428_SHARP_,p2__37429_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37428_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37429_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__37430_SHARP_,p2__37431_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37430_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37431_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field37432 = (function() {
var color_field37432 = null;
var color_field37432__1 = (function (name__13522__auto__){return color_field37432.call(null,name__13522__auto__,null);
});
var color_field37432__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__13522__auto__,value__13523__auto__);
});
color_field37432 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return color_field37432__1.call(this,name__13522__auto__);
case 2:
return color_field37432__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field37432.cljs$core$IFn$_invoke$arity$1 = color_field37432__1;
color_field37432.cljs$core$IFn$_invoke$arity$2 = color_field37432__2;
return color_field37432;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37432);
/**
* Creates a date input field.
*/
sablono.core.date_field37433 = (function() {
var date_field37433 = null;
var date_field37433__1 = (function (name__13522__auto__){return date_field37433.call(null,name__13522__auto__,null);
});
var date_field37433__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__13522__auto__,value__13523__auto__);
});
date_field37433 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return date_field37433__1.call(this,name__13522__auto__);
case 2:
return date_field37433__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field37433.cljs$core$IFn$_invoke$arity$1 = date_field37433__1;
date_field37433.cljs$core$IFn$_invoke$arity$2 = date_field37433__2;
return date_field37433;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37433);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field37434 = (function() {
var datetime_field37434 = null;
var datetime_field37434__1 = (function (name__13522__auto__){return datetime_field37434.call(null,name__13522__auto__,null);
});
var datetime_field37434__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__13522__auto__,value__13523__auto__);
});
datetime_field37434 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_field37434__1.call(this,name__13522__auto__);
case 2:
return datetime_field37434__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field37434.cljs$core$IFn$_invoke$arity$1 = datetime_field37434__1;
datetime_field37434.cljs$core$IFn$_invoke$arity$2 = datetime_field37434__2;
return datetime_field37434;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37434);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field37435 = (function() {
var datetime_local_field37435 = null;
var datetime_local_field37435__1 = (function (name__13522__auto__){return datetime_local_field37435.call(null,name__13522__auto__,null);
});
var datetime_local_field37435__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__13522__auto__,value__13523__auto__);
});
datetime_local_field37435 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return datetime_local_field37435__1.call(this,name__13522__auto__);
case 2:
return datetime_local_field37435__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field37435.cljs$core$IFn$_invoke$arity$1 = datetime_local_field37435__1;
datetime_local_field37435.cljs$core$IFn$_invoke$arity$2 = datetime_local_field37435__2;
return datetime_local_field37435;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37435);
/**
* Creates a email input field.
*/
sablono.core.email_field37436 = (function() {
var email_field37436 = null;
var email_field37436__1 = (function (name__13522__auto__){return email_field37436.call(null,name__13522__auto__,null);
});
var email_field37436__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__13522__auto__,value__13523__auto__);
});
email_field37436 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return email_field37436__1.call(this,name__13522__auto__);
case 2:
return email_field37436__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field37436.cljs$core$IFn$_invoke$arity$1 = email_field37436__1;
email_field37436.cljs$core$IFn$_invoke$arity$2 = email_field37436__2;
return email_field37436;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37436);
/**
* Creates a file input field.
*/
sablono.core.file_field37437 = (function() {
var file_field37437 = null;
var file_field37437__1 = (function (name__13522__auto__){return file_field37437.call(null,name__13522__auto__,null);
});
var file_field37437__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__13522__auto__,value__13523__auto__);
});
file_field37437 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return file_field37437__1.call(this,name__13522__auto__);
case 2:
return file_field37437__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field37437.cljs$core$IFn$_invoke$arity$1 = file_field37437__1;
file_field37437.cljs$core$IFn$_invoke$arity$2 = file_field37437__2;
return file_field37437;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37437);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field37438 = (function() {
var hidden_field37438 = null;
var hidden_field37438__1 = (function (name__13522__auto__){return hidden_field37438.call(null,name__13522__auto__,null);
});
var hidden_field37438__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__13522__auto__,value__13523__auto__);
});
hidden_field37438 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return hidden_field37438__1.call(this,name__13522__auto__);
case 2:
return hidden_field37438__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field37438.cljs$core$IFn$_invoke$arity$1 = hidden_field37438__1;
hidden_field37438.cljs$core$IFn$_invoke$arity$2 = hidden_field37438__2;
return hidden_field37438;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37438);
/**
* Creates a month input field.
*/
sablono.core.month_field37439 = (function() {
var month_field37439 = null;
var month_field37439__1 = (function (name__13522__auto__){return month_field37439.call(null,name__13522__auto__,null);
});
var month_field37439__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__13522__auto__,value__13523__auto__);
});
month_field37439 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return month_field37439__1.call(this,name__13522__auto__);
case 2:
return month_field37439__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field37439.cljs$core$IFn$_invoke$arity$1 = month_field37439__1;
month_field37439.cljs$core$IFn$_invoke$arity$2 = month_field37439__2;
return month_field37439;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37439);
/**
* Creates a number input field.
*/
sablono.core.number_field37440 = (function() {
var number_field37440 = null;
var number_field37440__1 = (function (name__13522__auto__){return number_field37440.call(null,name__13522__auto__,null);
});
var number_field37440__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__13522__auto__,value__13523__auto__);
});
number_field37440 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return number_field37440__1.call(this,name__13522__auto__);
case 2:
return number_field37440__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field37440.cljs$core$IFn$_invoke$arity$1 = number_field37440__1;
number_field37440.cljs$core$IFn$_invoke$arity$2 = number_field37440__2;
return number_field37440;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37440);
/**
* Creates a password input field.
*/
sablono.core.password_field37441 = (function() {
var password_field37441 = null;
var password_field37441__1 = (function (name__13522__auto__){return password_field37441.call(null,name__13522__auto__,null);
});
var password_field37441__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__13522__auto__,value__13523__auto__);
});
password_field37441 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return password_field37441__1.call(this,name__13522__auto__);
case 2:
return password_field37441__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field37441.cljs$core$IFn$_invoke$arity$1 = password_field37441__1;
password_field37441.cljs$core$IFn$_invoke$arity$2 = password_field37441__2;
return password_field37441;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37441);
/**
* Creates a range input field.
*/
sablono.core.range_field37442 = (function() {
var range_field37442 = null;
var range_field37442__1 = (function (name__13522__auto__){return range_field37442.call(null,name__13522__auto__,null);
});
var range_field37442__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__13522__auto__,value__13523__auto__);
});
range_field37442 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return range_field37442__1.call(this,name__13522__auto__);
case 2:
return range_field37442__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field37442.cljs$core$IFn$_invoke$arity$1 = range_field37442__1;
range_field37442.cljs$core$IFn$_invoke$arity$2 = range_field37442__2;
return range_field37442;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37442);
/**
* Creates a search input field.
*/
sablono.core.search_field37443 = (function() {
var search_field37443 = null;
var search_field37443__1 = (function (name__13522__auto__){return search_field37443.call(null,name__13522__auto__,null);
});
var search_field37443__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__13522__auto__,value__13523__auto__);
});
search_field37443 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return search_field37443__1.call(this,name__13522__auto__);
case 2:
return search_field37443__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field37443.cljs$core$IFn$_invoke$arity$1 = search_field37443__1;
search_field37443.cljs$core$IFn$_invoke$arity$2 = search_field37443__2;
return search_field37443;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37443);
/**
* Creates a tel input field.
*/
sablono.core.tel_field37444 = (function() {
var tel_field37444 = null;
var tel_field37444__1 = (function (name__13522__auto__){return tel_field37444.call(null,name__13522__auto__,null);
});
var tel_field37444__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__13522__auto__,value__13523__auto__);
});
tel_field37444 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return tel_field37444__1.call(this,name__13522__auto__);
case 2:
return tel_field37444__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field37444.cljs$core$IFn$_invoke$arity$1 = tel_field37444__1;
tel_field37444.cljs$core$IFn$_invoke$arity$2 = tel_field37444__2;
return tel_field37444;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37444);
/**
* Creates a text input field.
*/
sablono.core.text_field37445 = (function() {
var text_field37445 = null;
var text_field37445__1 = (function (name__13522__auto__){return text_field37445.call(null,name__13522__auto__,null);
});
var text_field37445__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__13522__auto__,value__13523__auto__);
});
text_field37445 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return text_field37445__1.call(this,name__13522__auto__);
case 2:
return text_field37445__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field37445.cljs$core$IFn$_invoke$arity$1 = text_field37445__1;
text_field37445.cljs$core$IFn$_invoke$arity$2 = text_field37445__2;
return text_field37445;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37445);
/**
* Creates a time input field.
*/
sablono.core.time_field37446 = (function() {
var time_field37446 = null;
var time_field37446__1 = (function (name__13522__auto__){return time_field37446.call(null,name__13522__auto__,null);
});
var time_field37446__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__13522__auto__,value__13523__auto__);
});
time_field37446 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return time_field37446__1.call(this,name__13522__auto__);
case 2:
return time_field37446__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field37446.cljs$core$IFn$_invoke$arity$1 = time_field37446__1;
time_field37446.cljs$core$IFn$_invoke$arity$2 = time_field37446__2;
return time_field37446;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37446);
/**
* Creates a url input field.
*/
sablono.core.url_field37447 = (function() {
var url_field37447 = null;
var url_field37447__1 = (function (name__13522__auto__){return url_field37447.call(null,name__13522__auto__,null);
});
var url_field37447__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__13522__auto__,value__13523__auto__);
});
url_field37447 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return url_field37447__1.call(this,name__13522__auto__);
case 2:
return url_field37447__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field37447.cljs$core$IFn$_invoke$arity$1 = url_field37447__1;
url_field37447.cljs$core$IFn$_invoke$arity$2 = url_field37447__2;
return url_field37447;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37447);
/**
* Creates a week input field.
*/
sablono.core.week_field37448 = (function() {
var week_field37448 = null;
var week_field37448__1 = (function (name__13522__auto__){return week_field37448.call(null,name__13522__auto__,null);
});
var week_field37448__2 = (function (name__13522__auto__,value__13523__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__13522__auto__,value__13523__auto__);
});
week_field37448 = function(name__13522__auto__,value__13523__auto__){
switch(arguments.length){
case 1:
return week_field37448__1.call(this,name__13522__auto__);
case 2:
return week_field37448__2.call(this,name__13522__auto__,value__13523__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field37448.cljs$core$IFn$_invoke$arity$1 = week_field37448__1;
week_field37448.cljs$core$IFn$_invoke$arity$2 = week_field37448__2;
return week_field37448;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37448);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box37449 = (function() {
var check_box37449 = null;
var check_box37449__1 = (function (name){return check_box37449.call(null,name,null);
});
var check_box37449__2 = (function (name,checked_QMARK_){return check_box37449.call(null,name,checked_QMARK_,"true");
});
var check_box37449__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box37449 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box37449__1.call(this,name);
case 2:
return check_box37449__2.call(this,name,checked_QMARK_);
case 3:
return check_box37449__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box37449.cljs$core$IFn$_invoke$arity$1 = check_box37449__1;
check_box37449.cljs$core$IFn$_invoke$arity$2 = check_box37449__2;
check_box37449.cljs$core$IFn$_invoke$arity$3 = check_box37449__3;
return check_box37449;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37449);
/**
* Creates a radio button.
*/
sablono.core.radio_button37450 = (function() {
var radio_button37450 = null;
var radio_button37450__1 = (function (group){return radio_button37450.call(null,group,null);
});
var radio_button37450__2 = (function (group,checked_QMARK_){return radio_button37450.call(null,group,checked_QMARK_,"true");
});
var radio_button37450__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button37450 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button37450__1.call(this,group);
case 2:
return radio_button37450__2.call(this,group,checked_QMARK_);
case 3:
return radio_button37450__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button37450.cljs$core$IFn$_invoke$arity$1 = radio_button37450__1;
radio_button37450.cljs$core$IFn$_invoke$arity$2 = radio_button37450__2;
radio_button37450.cljs$core$IFn$_invoke$arity$3 = radio_button37450__3;
return radio_button37450;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37450);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options37451 = (function() {
var select_options37451 = null;
var select_options37451__1 = (function (coll){return select_options37451.call(null,coll,null);
});
var select_options37451__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__37460(s__37461){return (new cljs.core.LazySeq(null,(function (){var s__37461__$1 = s__37461;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37461__$1);if(temp__4126__auto__)
{var s__37461__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37461__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37461__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37463 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37462 = (0);while(true){
if((i__37462 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__37462);cljs.core.chunk_append.call(null,b__37463,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37466 = x;var text = cljs.core.nth.call(null,vec__37466,(0),null);var val = cljs.core.nth.call(null,vec__37466,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__37466,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options37451.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__37468 = (i__37462 + (1));
i__37462 = G__37468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37463),iter__37460.call(null,cljs.core.chunk_rest.call(null,s__37461__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37463),null);
}
} else
{var x = cljs.core.first.call(null,s__37461__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37467 = x;var text = cljs.core.nth.call(null,vec__37467,(0),null);var val = cljs.core.nth.call(null,vec__37467,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__37467,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options37451.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__37460.call(null,cljs.core.rest.call(null,s__37461__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options37451 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options37451__1.call(this,coll);
case 2:
return select_options37451__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options37451.cljs$core$IFn$_invoke$arity$1 = select_options37451__1;
select_options37451.cljs$core$IFn$_invoke$arity$2 = select_options37451__2;
return select_options37451;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37451);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down37469 = (function() {
var drop_down37469 = null;
var drop_down37469__2 = (function (name,options){return drop_down37469.call(null,name,options,null);
});
var drop_down37469__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down37469 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down37469__2.call(this,name,options);
case 3:
return drop_down37469__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down37469.cljs$core$IFn$_invoke$arity$2 = drop_down37469__2;
drop_down37469.cljs$core$IFn$_invoke$arity$3 = drop_down37469__3;
return drop_down37469;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37469);
/**
* Creates a text area element.
*/
sablono.core.text_area37470 = (function() {
var text_area37470 = null;
var text_area37470__1 = (function (name){return text_area37470.call(null,name,null);
});
var text_area37470__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area37470 = function(name,value){
switch(arguments.length){
case 1:
return text_area37470__1.call(this,name);
case 2:
return text_area37470__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area37470.cljs$core$IFn$_invoke$arity$1 = text_area37470__1;
text_area37470.cljs$core$IFn$_invoke$arity$2 = text_area37470__2;
return text_area37470;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37470);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label37471 = (function label37471(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37471);
/**
* Creates a submit button.
*/
sablono.core.submit_button37472 = (function submit_button37472(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37472);
/**
* Creates a form reset button.
*/
sablono.core.reset_button37473 = (function reset_button37473(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37473);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to37474 = (function() { 
var form_to37474__delegate = function (p__37475,body){var vec__37477 = p__37475;var method = cljs.core.nth.call(null,vec__37477,(0),null);var action = cljs.core.nth.call(null,vec__37477,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to37474 = function (p__37475,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to37474__delegate.call(this,p__37475,body);};
form_to37474.cljs$lang$maxFixedArity = 1;
form_to37474.cljs$lang$applyTo = (function (arglist__37478){
var p__37475 = cljs.core.first(arglist__37478);
var body = cljs.core.rest(arglist__37478);
return form_to37474__delegate(p__37475,body);
});
form_to37474.cljs$core$IFn$_invoke$arity$variadic = form_to37474__delegate;
return form_to37474;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37474);

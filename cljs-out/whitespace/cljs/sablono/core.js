// Compiled by ClojureScript 0.0-2268
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
var G__18411__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18410 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18410,(0),null);var body = cljs.core.nthnext.call(null,vec__18410,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18411 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18411__delegate.call(this,args);};
G__18411.cljs$lang$maxFixedArity = 0;
G__18411.cljs$lang$applyTo = (function (arglist__18412){
var args = cljs.core.seq(arglist__18412);
return G__18411__delegate(args);
});
G__18411.cljs$core$IFn$_invoke$arity$variadic = G__18411__delegate;
return G__18411;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__18417(s__18418){return (new cljs.core.LazySeq(null,(function (){var s__18418__$1 = s__18418;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18418__$1);if(temp__4126__auto__)
{var s__18418__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18418__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18418__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18420 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18419 = (0);while(true){
if((i__18419 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__18419);cljs.core.chunk_append.call(null,b__18420,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__18421 = (i__18419 + (1));
i__18419 = G__18421;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18420),iter__18417.call(null,cljs.core.chunk_rest.call(null,s__18418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18420),null);
}
} else
{var args = cljs.core.first.call(null,s__18418__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18417.call(null,cljs.core.rest.call(null,s__18418__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__18426(s__18427){return (new cljs.core.LazySeq(null,(function (){var s__18427__$1 = s__18427;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18427__$1);if(temp__4126__auto__)
{var s__18427__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18427__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18427__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18429 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18428 = (0);while(true){
if((i__18428 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__18428);cljs.core.chunk_append.call(null,b__18429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__18430 = (i__18428 + (1));
i__18428 = G__18430;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18429),iter__18426.call(null,cljs.core.chunk_rest.call(null,s__18427__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18429),null);
}
} else
{var style = cljs.core.first.call(null,s__18427__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__18426.call(null,cljs.core.rest.call(null,s__18427__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__18431){
var styles = cljs.core.seq(arglist__18431);
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
sablono.core.link_to18432 = (function() { 
var link_to18432__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18432 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18432__delegate.call(this,url,content);};
link_to18432.cljs$lang$maxFixedArity = 1;
link_to18432.cljs$lang$applyTo = (function (arglist__18433){
var url = cljs.core.first(arglist__18433);
var content = cljs.core.rest(arglist__18433);
return link_to18432__delegate(url,content);
});
link_to18432.cljs$core$IFn$_invoke$arity$variadic = link_to18432__delegate;
return link_to18432;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18432);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18434 = (function() { 
var mail_to18434__delegate = function (e_mail,p__18435){var vec__18437 = p__18435;var content = cljs.core.nth.call(null,vec__18437,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18434 = function (e_mail,var_args){
var p__18435 = null;if (arguments.length > 1) {
  p__18435 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18434__delegate.call(this,e_mail,p__18435);};
mail_to18434.cljs$lang$maxFixedArity = 1;
mail_to18434.cljs$lang$applyTo = (function (arglist__18438){
var e_mail = cljs.core.first(arglist__18438);
var p__18435 = cljs.core.rest(arglist__18438);
return mail_to18434__delegate(e_mail,p__18435);
});
mail_to18434.cljs$core$IFn$_invoke$arity$variadic = mail_to18434__delegate;
return mail_to18434;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18434);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18439 = (function unordered_list18439(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__18444(s__18445){return (new cljs.core.LazySeq(null,(function (){var s__18445__$1 = s__18445;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18445__$1);if(temp__4126__auto__)
{var s__18445__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18445__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18445__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18447 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18446 = (0);while(true){
if((i__18446 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18446);cljs.core.chunk_append.call(null,b__18447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18448 = (i__18446 + (1));
i__18446 = G__18448;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18447),iter__18444.call(null,cljs.core.chunk_rest.call(null,s__18445__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18447),null);
}
} else
{var x = cljs.core.first.call(null,s__18445__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18444.call(null,cljs.core.rest.call(null,s__18445__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18439);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18449 = (function ordered_list18449(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__18454(s__18455){return (new cljs.core.LazySeq(null,(function (){var s__18455__$1 = s__18455;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18455__$1);if(temp__4126__auto__)
{var s__18455__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18455__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18455__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18457 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18456 = (0);while(true){
if((i__18456 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18456);cljs.core.chunk_append.call(null,b__18457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18458 = (i__18456 + (1));
i__18456 = G__18458;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18457),iter__18454.call(null,cljs.core.chunk_rest.call(null,s__18455__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18457),null);
}
} else
{var x = cljs.core.first.call(null,s__18455__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18454.call(null,cljs.core.rest.call(null,s__18455__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18449);
/**
* Create an image element.
*/
sablono.core.image18459 = (function() {
var image18459 = null;
var image18459__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image18459__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image18459 = function(src,alt){
switch(arguments.length){
case 1:
return image18459__1.call(this,src);
case 2:
return image18459__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18459.cljs$core$IFn$_invoke$arity$1 = image18459__1;
image18459.cljs$core$IFn$_invoke$arity$2 = image18459__2;
return image18459;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18459);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18460_SHARP_,p2__18461_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18460_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18461_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18462_SHARP_,p2__18463_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18462_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18463_SHARP_));
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
sablono.core.color_field18464 = (function() {
var color_field18464 = null;
var color_field18464__1 = (function (name__10242__auto__){return color_field18464.call(null,name__10242__auto__,null);
});
var color_field18464__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10242__auto__,value__10243__auto__);
});
color_field18464 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return color_field18464__1.call(this,name__10242__auto__);
case 2:
return color_field18464__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field18464.cljs$core$IFn$_invoke$arity$1 = color_field18464__1;
color_field18464.cljs$core$IFn$_invoke$arity$2 = color_field18464__2;
return color_field18464;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18464);
/**
* Creates a date input field.
*/
sablono.core.date_field18465 = (function() {
var date_field18465 = null;
var date_field18465__1 = (function (name__10242__auto__){return date_field18465.call(null,name__10242__auto__,null);
});
var date_field18465__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10242__auto__,value__10243__auto__);
});
date_field18465 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return date_field18465__1.call(this,name__10242__auto__);
case 2:
return date_field18465__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field18465.cljs$core$IFn$_invoke$arity$1 = date_field18465__1;
date_field18465.cljs$core$IFn$_invoke$arity$2 = date_field18465__2;
return date_field18465;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18465);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field18466 = (function() {
var datetime_field18466 = null;
var datetime_field18466__1 = (function (name__10242__auto__){return datetime_field18466.call(null,name__10242__auto__,null);
});
var datetime_field18466__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10242__auto__,value__10243__auto__);
});
datetime_field18466 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_field18466__1.call(this,name__10242__auto__);
case 2:
return datetime_field18466__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field18466.cljs$core$IFn$_invoke$arity$1 = datetime_field18466__1;
datetime_field18466.cljs$core$IFn$_invoke$arity$2 = datetime_field18466__2;
return datetime_field18466;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18466);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field18467 = (function() {
var datetime_local_field18467 = null;
var datetime_local_field18467__1 = (function (name__10242__auto__){return datetime_local_field18467.call(null,name__10242__auto__,null);
});
var datetime_local_field18467__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10242__auto__,value__10243__auto__);
});
datetime_local_field18467 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_local_field18467__1.call(this,name__10242__auto__);
case 2:
return datetime_local_field18467__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field18467.cljs$core$IFn$_invoke$arity$1 = datetime_local_field18467__1;
datetime_local_field18467.cljs$core$IFn$_invoke$arity$2 = datetime_local_field18467__2;
return datetime_local_field18467;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18467);
/**
* Creates a email input field.
*/
sablono.core.email_field18468 = (function() {
var email_field18468 = null;
var email_field18468__1 = (function (name__10242__auto__){return email_field18468.call(null,name__10242__auto__,null);
});
var email_field18468__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10242__auto__,value__10243__auto__);
});
email_field18468 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return email_field18468__1.call(this,name__10242__auto__);
case 2:
return email_field18468__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18468.cljs$core$IFn$_invoke$arity$1 = email_field18468__1;
email_field18468.cljs$core$IFn$_invoke$arity$2 = email_field18468__2;
return email_field18468;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18468);
/**
* Creates a file input field.
*/
sablono.core.file_field18469 = (function() {
var file_field18469 = null;
var file_field18469__1 = (function (name__10242__auto__){return file_field18469.call(null,name__10242__auto__,null);
});
var file_field18469__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10242__auto__,value__10243__auto__);
});
file_field18469 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return file_field18469__1.call(this,name__10242__auto__);
case 2:
return file_field18469__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field18469.cljs$core$IFn$_invoke$arity$1 = file_field18469__1;
file_field18469.cljs$core$IFn$_invoke$arity$2 = file_field18469__2;
return file_field18469;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18469);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18470 = (function() {
var hidden_field18470 = null;
var hidden_field18470__1 = (function (name__10242__auto__){return hidden_field18470.call(null,name__10242__auto__,null);
});
var hidden_field18470__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10242__auto__,value__10243__auto__);
});
hidden_field18470 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return hidden_field18470__1.call(this,name__10242__auto__);
case 2:
return hidden_field18470__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18470.cljs$core$IFn$_invoke$arity$1 = hidden_field18470__1;
hidden_field18470.cljs$core$IFn$_invoke$arity$2 = hidden_field18470__2;
return hidden_field18470;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18470);
/**
* Creates a month input field.
*/
sablono.core.month_field18471 = (function() {
var month_field18471 = null;
var month_field18471__1 = (function (name__10242__auto__){return month_field18471.call(null,name__10242__auto__,null);
});
var month_field18471__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10242__auto__,value__10243__auto__);
});
month_field18471 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return month_field18471__1.call(this,name__10242__auto__);
case 2:
return month_field18471__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field18471.cljs$core$IFn$_invoke$arity$1 = month_field18471__1;
month_field18471.cljs$core$IFn$_invoke$arity$2 = month_field18471__2;
return month_field18471;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18471);
/**
* Creates a number input field.
*/
sablono.core.number_field18472 = (function() {
var number_field18472 = null;
var number_field18472__1 = (function (name__10242__auto__){return number_field18472.call(null,name__10242__auto__,null);
});
var number_field18472__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10242__auto__,value__10243__auto__);
});
number_field18472 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return number_field18472__1.call(this,name__10242__auto__);
case 2:
return number_field18472__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field18472.cljs$core$IFn$_invoke$arity$1 = number_field18472__1;
number_field18472.cljs$core$IFn$_invoke$arity$2 = number_field18472__2;
return number_field18472;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18472);
/**
* Creates a password input field.
*/
sablono.core.password_field18473 = (function() {
var password_field18473 = null;
var password_field18473__1 = (function (name__10242__auto__){return password_field18473.call(null,name__10242__auto__,null);
});
var password_field18473__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10242__auto__,value__10243__auto__);
});
password_field18473 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return password_field18473__1.call(this,name__10242__auto__);
case 2:
return password_field18473__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18473.cljs$core$IFn$_invoke$arity$1 = password_field18473__1;
password_field18473.cljs$core$IFn$_invoke$arity$2 = password_field18473__2;
return password_field18473;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18473);
/**
* Creates a range input field.
*/
sablono.core.range_field18474 = (function() {
var range_field18474 = null;
var range_field18474__1 = (function (name__10242__auto__){return range_field18474.call(null,name__10242__auto__,null);
});
var range_field18474__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10242__auto__,value__10243__auto__);
});
range_field18474 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return range_field18474__1.call(this,name__10242__auto__);
case 2:
return range_field18474__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field18474.cljs$core$IFn$_invoke$arity$1 = range_field18474__1;
range_field18474.cljs$core$IFn$_invoke$arity$2 = range_field18474__2;
return range_field18474;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18474);
/**
* Creates a search input field.
*/
sablono.core.search_field18475 = (function() {
var search_field18475 = null;
var search_field18475__1 = (function (name__10242__auto__){return search_field18475.call(null,name__10242__auto__,null);
});
var search_field18475__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10242__auto__,value__10243__auto__);
});
search_field18475 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return search_field18475__1.call(this,name__10242__auto__);
case 2:
return search_field18475__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field18475.cljs$core$IFn$_invoke$arity$1 = search_field18475__1;
search_field18475.cljs$core$IFn$_invoke$arity$2 = search_field18475__2;
return search_field18475;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18475);
/**
* Creates a tel input field.
*/
sablono.core.tel_field18476 = (function() {
var tel_field18476 = null;
var tel_field18476__1 = (function (name__10242__auto__){return tel_field18476.call(null,name__10242__auto__,null);
});
var tel_field18476__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10242__auto__,value__10243__auto__);
});
tel_field18476 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return tel_field18476__1.call(this,name__10242__auto__);
case 2:
return tel_field18476__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field18476.cljs$core$IFn$_invoke$arity$1 = tel_field18476__1;
tel_field18476.cljs$core$IFn$_invoke$arity$2 = tel_field18476__2;
return tel_field18476;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18476);
/**
* Creates a text input field.
*/
sablono.core.text_field18477 = (function() {
var text_field18477 = null;
var text_field18477__1 = (function (name__10242__auto__){return text_field18477.call(null,name__10242__auto__,null);
});
var text_field18477__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10242__auto__,value__10243__auto__);
});
text_field18477 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return text_field18477__1.call(this,name__10242__auto__);
case 2:
return text_field18477__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18477.cljs$core$IFn$_invoke$arity$1 = text_field18477__1;
text_field18477.cljs$core$IFn$_invoke$arity$2 = text_field18477__2;
return text_field18477;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18477);
/**
* Creates a time input field.
*/
sablono.core.time_field18478 = (function() {
var time_field18478 = null;
var time_field18478__1 = (function (name__10242__auto__){return time_field18478.call(null,name__10242__auto__,null);
});
var time_field18478__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10242__auto__,value__10243__auto__);
});
time_field18478 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return time_field18478__1.call(this,name__10242__auto__);
case 2:
return time_field18478__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field18478.cljs$core$IFn$_invoke$arity$1 = time_field18478__1;
time_field18478.cljs$core$IFn$_invoke$arity$2 = time_field18478__2;
return time_field18478;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18478);
/**
* Creates a url input field.
*/
sablono.core.url_field18479 = (function() {
var url_field18479 = null;
var url_field18479__1 = (function (name__10242__auto__){return url_field18479.call(null,name__10242__auto__,null);
});
var url_field18479__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10242__auto__,value__10243__auto__);
});
url_field18479 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return url_field18479__1.call(this,name__10242__auto__);
case 2:
return url_field18479__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field18479.cljs$core$IFn$_invoke$arity$1 = url_field18479__1;
url_field18479.cljs$core$IFn$_invoke$arity$2 = url_field18479__2;
return url_field18479;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18479);
/**
* Creates a week input field.
*/
sablono.core.week_field18480 = (function() {
var week_field18480 = null;
var week_field18480__1 = (function (name__10242__auto__){return week_field18480.call(null,name__10242__auto__,null);
});
var week_field18480__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10242__auto__,value__10243__auto__);
});
week_field18480 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return week_field18480__1.call(this,name__10242__auto__);
case 2:
return week_field18480__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field18480.cljs$core$IFn$_invoke$arity$1 = week_field18480__1;
week_field18480.cljs$core$IFn$_invoke$arity$2 = week_field18480__2;
return week_field18480;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18480);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box18481 = (function() {
var check_box18481 = null;
var check_box18481__1 = (function (name){return check_box18481.call(null,name,null);
});
var check_box18481__2 = (function (name,checked_QMARK_){return check_box18481.call(null,name,checked_QMARK_,"true");
});
var check_box18481__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box18481 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18481__1.call(this,name);
case 2:
return check_box18481__2.call(this,name,checked_QMARK_);
case 3:
return check_box18481__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18481.cljs$core$IFn$_invoke$arity$1 = check_box18481__1;
check_box18481.cljs$core$IFn$_invoke$arity$2 = check_box18481__2;
check_box18481.cljs$core$IFn$_invoke$arity$3 = check_box18481__3;
return check_box18481;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18481);
/**
* Creates a radio button.
*/
sablono.core.radio_button18482 = (function() {
var radio_button18482 = null;
var radio_button18482__1 = (function (group){return radio_button18482.call(null,group,null);
});
var radio_button18482__2 = (function (group,checked_QMARK_){return radio_button18482.call(null,group,checked_QMARK_,"true");
});
var radio_button18482__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button18482 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18482__1.call(this,group);
case 2:
return radio_button18482__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18482__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18482.cljs$core$IFn$_invoke$arity$1 = radio_button18482__1;
radio_button18482.cljs$core$IFn$_invoke$arity$2 = radio_button18482__2;
radio_button18482.cljs$core$IFn$_invoke$arity$3 = radio_button18482__3;
return radio_button18482;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18482);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18483 = (function() {
var select_options18483 = null;
var select_options18483__1 = (function (coll){return select_options18483.call(null,coll,null);
});
var select_options18483__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__18492(s__18493){return (new cljs.core.LazySeq(null,(function (){var s__18493__$1 = s__18493;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18493__$1);if(temp__4126__auto__)
{var s__18493__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18493__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18493__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18495 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18494 = (0);while(true){
if((i__18494 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__18494);cljs.core.chunk_append.call(null,b__18495,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18498 = x;var text = cljs.core.nth.call(null,vec__18498,(0),null);var val = cljs.core.nth.call(null,vec__18498,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18498,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18483.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18500 = (i__18494 + (1));
i__18494 = G__18500;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18495),iter__18492.call(null,cljs.core.chunk_rest.call(null,s__18493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18495),null);
}
} else
{var x = cljs.core.first.call(null,s__18493__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18499 = x;var text = cljs.core.nth.call(null,vec__18499,(0),null);var val = cljs.core.nth.call(null,vec__18499,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18499,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18483.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18492.call(null,cljs.core.rest.call(null,s__18493__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options18483 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18483__1.call(this,coll);
case 2:
return select_options18483__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18483.cljs$core$IFn$_invoke$arity$1 = select_options18483__1;
select_options18483.cljs$core$IFn$_invoke$arity$2 = select_options18483__2;
return select_options18483;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18483);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18501 = (function() {
var drop_down18501 = null;
var drop_down18501__2 = (function (name,options){return drop_down18501.call(null,name,options,null);
});
var drop_down18501__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18501 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18501__2.call(this,name,options);
case 3:
return drop_down18501__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18501.cljs$core$IFn$_invoke$arity$2 = drop_down18501__2;
drop_down18501.cljs$core$IFn$_invoke$arity$3 = drop_down18501__3;
return drop_down18501;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18501);
/**
* Creates a text area element.
*/
sablono.core.text_area18502 = (function() {
var text_area18502 = null;
var text_area18502__1 = (function (name){return text_area18502.call(null,name,null);
});
var text_area18502__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area18502 = function(name,value){
switch(arguments.length){
case 1:
return text_area18502__1.call(this,name);
case 2:
return text_area18502__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18502.cljs$core$IFn$_invoke$arity$1 = text_area18502__1;
text_area18502.cljs$core$IFn$_invoke$arity$2 = text_area18502__2;
return text_area18502;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18502);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18503 = (function label18503(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18503);
/**
* Creates a submit button.
*/
sablono.core.submit_button18504 = (function submit_button18504(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18504);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18505 = (function reset_button18505(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18505);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18506 = (function() { 
var form_to18506__delegate = function (p__18507,body){var vec__18509 = p__18507;var method = cljs.core.nth.call(null,vec__18509,(0),null);var action = cljs.core.nth.call(null,vec__18509,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18506 = function (p__18507,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18506__delegate.call(this,p__18507,body);};
form_to18506.cljs$lang$maxFixedArity = 1;
form_to18506.cljs$lang$applyTo = (function (arglist__18510){
var p__18507 = cljs.core.first(arglist__18510);
var body = cljs.core.rest(arglist__18510);
return form_to18506__delegate(p__18507,body);
});
form_to18506.cljs$core$IFn$_invoke$arity$variadic = form_to18506__delegate;
return form_to18506;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18506);

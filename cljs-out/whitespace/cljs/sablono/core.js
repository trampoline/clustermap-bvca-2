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
var G__18582__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18581 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18581,(0),null);var body = cljs.core.nthnext.call(null,vec__18581,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18582 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18582__delegate.call(this,args);};
G__18582.cljs$lang$maxFixedArity = 0;
G__18582.cljs$lang$applyTo = (function (arglist__18583){
var args = cljs.core.seq(arglist__18583);
return G__18582__delegate(args);
});
G__18582.cljs$core$IFn$_invoke$arity$variadic = G__18582__delegate;
return G__18582;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__18588(s__18589){return (new cljs.core.LazySeq(null,(function (){var s__18589__$1 = s__18589;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18589__$1);if(temp__4126__auto__)
{var s__18589__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18589__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18589__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18591 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18590 = (0);while(true){
if((i__18590 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__18590);cljs.core.chunk_append.call(null,b__18591,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__18592 = (i__18590 + (1));
i__18590 = G__18592;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18591),iter__18588.call(null,cljs.core.chunk_rest.call(null,s__18589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18591),null);
}
} else
{var args = cljs.core.first.call(null,s__18589__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18588.call(null,cljs.core.rest.call(null,s__18589__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__18597(s__18598){return (new cljs.core.LazySeq(null,(function (){var s__18598__$1 = s__18598;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18598__$1);if(temp__4126__auto__)
{var s__18598__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18598__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18598__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18600 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18599 = (0);while(true){
if((i__18599 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__18599);cljs.core.chunk_append.call(null,b__18600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__18601 = (i__18599 + (1));
i__18599 = G__18601;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18600),iter__18597.call(null,cljs.core.chunk_rest.call(null,s__18598__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18600),null);
}
} else
{var style = cljs.core.first.call(null,s__18598__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__18597.call(null,cljs.core.rest.call(null,s__18598__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__18602){
var styles = cljs.core.seq(arglist__18602);
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
sablono.core.link_to18603 = (function() { 
var link_to18603__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18603 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18603__delegate.call(this,url,content);};
link_to18603.cljs$lang$maxFixedArity = 1;
link_to18603.cljs$lang$applyTo = (function (arglist__18604){
var url = cljs.core.first(arglist__18604);
var content = cljs.core.rest(arglist__18604);
return link_to18603__delegate(url,content);
});
link_to18603.cljs$core$IFn$_invoke$arity$variadic = link_to18603__delegate;
return link_to18603;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18603);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18605 = (function() { 
var mail_to18605__delegate = function (e_mail,p__18606){var vec__18608 = p__18606;var content = cljs.core.nth.call(null,vec__18608,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18605 = function (e_mail,var_args){
var p__18606 = null;if (arguments.length > 1) {
  p__18606 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18605__delegate.call(this,e_mail,p__18606);};
mail_to18605.cljs$lang$maxFixedArity = 1;
mail_to18605.cljs$lang$applyTo = (function (arglist__18609){
var e_mail = cljs.core.first(arglist__18609);
var p__18606 = cljs.core.rest(arglist__18609);
return mail_to18605__delegate(e_mail,p__18606);
});
mail_to18605.cljs$core$IFn$_invoke$arity$variadic = mail_to18605__delegate;
return mail_to18605;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18605);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18610 = (function unordered_list18610(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__18615(s__18616){return (new cljs.core.LazySeq(null,(function (){var s__18616__$1 = s__18616;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18616__$1);if(temp__4126__auto__)
{var s__18616__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18616__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18616__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18618 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18617 = (0);while(true){
if((i__18617 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__18617);cljs.core.chunk_append.call(null,b__18618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18619 = (i__18617 + (1));
i__18617 = G__18619;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18618),iter__18615.call(null,cljs.core.chunk_rest.call(null,s__18616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18618),null);
}
} else
{var x = cljs.core.first.call(null,s__18616__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18615.call(null,cljs.core.rest.call(null,s__18616__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18610);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18620 = (function ordered_list18620(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__18625(s__18626){return (new cljs.core.LazySeq(null,(function (){var s__18626__$1 = s__18626;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18626__$1);if(temp__4126__auto__)
{var s__18626__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18626__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18626__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18628 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18627 = (0);while(true){
if((i__18627 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__18627);cljs.core.chunk_append.call(null,b__18628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18629 = (i__18627 + (1));
i__18627 = G__18629;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18628),iter__18625.call(null,cljs.core.chunk_rest.call(null,s__18626__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18628),null);
}
} else
{var x = cljs.core.first.call(null,s__18626__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18625.call(null,cljs.core.rest.call(null,s__18626__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18620);
/**
* Create an image element.
*/
sablono.core.image18630 = (function() {
var image18630 = null;
var image18630__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image18630__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image18630 = function(src,alt){
switch(arguments.length){
case 1:
return image18630__1.call(this,src);
case 2:
return image18630__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18630.cljs$core$IFn$_invoke$arity$1 = image18630__1;
image18630.cljs$core$IFn$_invoke$arity$2 = image18630__2;
return image18630;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18630);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18631_SHARP_,p2__18632_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18631_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18632_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18633_SHARP_,p2__18634_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18633_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18634_SHARP_));
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
sablono.core.color_field18635 = (function() {
var color_field18635 = null;
var color_field18635__1 = (function (name__10286__auto__){return color_field18635.call(null,name__10286__auto__,null);
});
var color_field18635__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10286__auto__,value__10287__auto__);
});
color_field18635 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return color_field18635__1.call(this,name__10286__auto__);
case 2:
return color_field18635__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field18635.cljs$core$IFn$_invoke$arity$1 = color_field18635__1;
color_field18635.cljs$core$IFn$_invoke$arity$2 = color_field18635__2;
return color_field18635;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18635);
/**
* Creates a date input field.
*/
sablono.core.date_field18636 = (function() {
var date_field18636 = null;
var date_field18636__1 = (function (name__10286__auto__){return date_field18636.call(null,name__10286__auto__,null);
});
var date_field18636__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10286__auto__,value__10287__auto__);
});
date_field18636 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return date_field18636__1.call(this,name__10286__auto__);
case 2:
return date_field18636__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field18636.cljs$core$IFn$_invoke$arity$1 = date_field18636__1;
date_field18636.cljs$core$IFn$_invoke$arity$2 = date_field18636__2;
return date_field18636;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18636);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field18637 = (function() {
var datetime_field18637 = null;
var datetime_field18637__1 = (function (name__10286__auto__){return datetime_field18637.call(null,name__10286__auto__,null);
});
var datetime_field18637__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10286__auto__,value__10287__auto__);
});
datetime_field18637 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_field18637__1.call(this,name__10286__auto__);
case 2:
return datetime_field18637__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field18637.cljs$core$IFn$_invoke$arity$1 = datetime_field18637__1;
datetime_field18637.cljs$core$IFn$_invoke$arity$2 = datetime_field18637__2;
return datetime_field18637;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18637);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field18638 = (function() {
var datetime_local_field18638 = null;
var datetime_local_field18638__1 = (function (name__10286__auto__){return datetime_local_field18638.call(null,name__10286__auto__,null);
});
var datetime_local_field18638__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10286__auto__,value__10287__auto__);
});
datetime_local_field18638 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_local_field18638__1.call(this,name__10286__auto__);
case 2:
return datetime_local_field18638__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field18638.cljs$core$IFn$_invoke$arity$1 = datetime_local_field18638__1;
datetime_local_field18638.cljs$core$IFn$_invoke$arity$2 = datetime_local_field18638__2;
return datetime_local_field18638;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18638);
/**
* Creates a email input field.
*/
sablono.core.email_field18639 = (function() {
var email_field18639 = null;
var email_field18639__1 = (function (name__10286__auto__){return email_field18639.call(null,name__10286__auto__,null);
});
var email_field18639__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10286__auto__,value__10287__auto__);
});
email_field18639 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return email_field18639__1.call(this,name__10286__auto__);
case 2:
return email_field18639__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18639.cljs$core$IFn$_invoke$arity$1 = email_field18639__1;
email_field18639.cljs$core$IFn$_invoke$arity$2 = email_field18639__2;
return email_field18639;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18639);
/**
* Creates a file input field.
*/
sablono.core.file_field18640 = (function() {
var file_field18640 = null;
var file_field18640__1 = (function (name__10286__auto__){return file_field18640.call(null,name__10286__auto__,null);
});
var file_field18640__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10286__auto__,value__10287__auto__);
});
file_field18640 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return file_field18640__1.call(this,name__10286__auto__);
case 2:
return file_field18640__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field18640.cljs$core$IFn$_invoke$arity$1 = file_field18640__1;
file_field18640.cljs$core$IFn$_invoke$arity$2 = file_field18640__2;
return file_field18640;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18640);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18641 = (function() {
var hidden_field18641 = null;
var hidden_field18641__1 = (function (name__10286__auto__){return hidden_field18641.call(null,name__10286__auto__,null);
});
var hidden_field18641__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10286__auto__,value__10287__auto__);
});
hidden_field18641 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return hidden_field18641__1.call(this,name__10286__auto__);
case 2:
return hidden_field18641__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18641.cljs$core$IFn$_invoke$arity$1 = hidden_field18641__1;
hidden_field18641.cljs$core$IFn$_invoke$arity$2 = hidden_field18641__2;
return hidden_field18641;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18641);
/**
* Creates a month input field.
*/
sablono.core.month_field18642 = (function() {
var month_field18642 = null;
var month_field18642__1 = (function (name__10286__auto__){return month_field18642.call(null,name__10286__auto__,null);
});
var month_field18642__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10286__auto__,value__10287__auto__);
});
month_field18642 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return month_field18642__1.call(this,name__10286__auto__);
case 2:
return month_field18642__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field18642.cljs$core$IFn$_invoke$arity$1 = month_field18642__1;
month_field18642.cljs$core$IFn$_invoke$arity$2 = month_field18642__2;
return month_field18642;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18642);
/**
* Creates a number input field.
*/
sablono.core.number_field18643 = (function() {
var number_field18643 = null;
var number_field18643__1 = (function (name__10286__auto__){return number_field18643.call(null,name__10286__auto__,null);
});
var number_field18643__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10286__auto__,value__10287__auto__);
});
number_field18643 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return number_field18643__1.call(this,name__10286__auto__);
case 2:
return number_field18643__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field18643.cljs$core$IFn$_invoke$arity$1 = number_field18643__1;
number_field18643.cljs$core$IFn$_invoke$arity$2 = number_field18643__2;
return number_field18643;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18643);
/**
* Creates a password input field.
*/
sablono.core.password_field18644 = (function() {
var password_field18644 = null;
var password_field18644__1 = (function (name__10286__auto__){return password_field18644.call(null,name__10286__auto__,null);
});
var password_field18644__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10286__auto__,value__10287__auto__);
});
password_field18644 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return password_field18644__1.call(this,name__10286__auto__);
case 2:
return password_field18644__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18644.cljs$core$IFn$_invoke$arity$1 = password_field18644__1;
password_field18644.cljs$core$IFn$_invoke$arity$2 = password_field18644__2;
return password_field18644;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18644);
/**
* Creates a range input field.
*/
sablono.core.range_field18645 = (function() {
var range_field18645 = null;
var range_field18645__1 = (function (name__10286__auto__){return range_field18645.call(null,name__10286__auto__,null);
});
var range_field18645__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10286__auto__,value__10287__auto__);
});
range_field18645 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return range_field18645__1.call(this,name__10286__auto__);
case 2:
return range_field18645__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field18645.cljs$core$IFn$_invoke$arity$1 = range_field18645__1;
range_field18645.cljs$core$IFn$_invoke$arity$2 = range_field18645__2;
return range_field18645;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18645);
/**
* Creates a search input field.
*/
sablono.core.search_field18646 = (function() {
var search_field18646 = null;
var search_field18646__1 = (function (name__10286__auto__){return search_field18646.call(null,name__10286__auto__,null);
});
var search_field18646__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10286__auto__,value__10287__auto__);
});
search_field18646 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return search_field18646__1.call(this,name__10286__auto__);
case 2:
return search_field18646__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field18646.cljs$core$IFn$_invoke$arity$1 = search_field18646__1;
search_field18646.cljs$core$IFn$_invoke$arity$2 = search_field18646__2;
return search_field18646;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18646);
/**
* Creates a tel input field.
*/
sablono.core.tel_field18647 = (function() {
var tel_field18647 = null;
var tel_field18647__1 = (function (name__10286__auto__){return tel_field18647.call(null,name__10286__auto__,null);
});
var tel_field18647__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10286__auto__,value__10287__auto__);
});
tel_field18647 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return tel_field18647__1.call(this,name__10286__auto__);
case 2:
return tel_field18647__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field18647.cljs$core$IFn$_invoke$arity$1 = tel_field18647__1;
tel_field18647.cljs$core$IFn$_invoke$arity$2 = tel_field18647__2;
return tel_field18647;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18647);
/**
* Creates a text input field.
*/
sablono.core.text_field18648 = (function() {
var text_field18648 = null;
var text_field18648__1 = (function (name__10286__auto__){return text_field18648.call(null,name__10286__auto__,null);
});
var text_field18648__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10286__auto__,value__10287__auto__);
});
text_field18648 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return text_field18648__1.call(this,name__10286__auto__);
case 2:
return text_field18648__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18648.cljs$core$IFn$_invoke$arity$1 = text_field18648__1;
text_field18648.cljs$core$IFn$_invoke$arity$2 = text_field18648__2;
return text_field18648;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18648);
/**
* Creates a time input field.
*/
sablono.core.time_field18649 = (function() {
var time_field18649 = null;
var time_field18649__1 = (function (name__10286__auto__){return time_field18649.call(null,name__10286__auto__,null);
});
var time_field18649__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10286__auto__,value__10287__auto__);
});
time_field18649 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return time_field18649__1.call(this,name__10286__auto__);
case 2:
return time_field18649__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field18649.cljs$core$IFn$_invoke$arity$1 = time_field18649__1;
time_field18649.cljs$core$IFn$_invoke$arity$2 = time_field18649__2;
return time_field18649;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18649);
/**
* Creates a url input field.
*/
sablono.core.url_field18650 = (function() {
var url_field18650 = null;
var url_field18650__1 = (function (name__10286__auto__){return url_field18650.call(null,name__10286__auto__,null);
});
var url_field18650__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10286__auto__,value__10287__auto__);
});
url_field18650 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return url_field18650__1.call(this,name__10286__auto__);
case 2:
return url_field18650__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field18650.cljs$core$IFn$_invoke$arity$1 = url_field18650__1;
url_field18650.cljs$core$IFn$_invoke$arity$2 = url_field18650__2;
return url_field18650;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18650);
/**
* Creates a week input field.
*/
sablono.core.week_field18651 = (function() {
var week_field18651 = null;
var week_field18651__1 = (function (name__10286__auto__){return week_field18651.call(null,name__10286__auto__,null);
});
var week_field18651__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10286__auto__,value__10287__auto__);
});
week_field18651 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return week_field18651__1.call(this,name__10286__auto__);
case 2:
return week_field18651__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field18651.cljs$core$IFn$_invoke$arity$1 = week_field18651__1;
week_field18651.cljs$core$IFn$_invoke$arity$2 = week_field18651__2;
return week_field18651;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18651);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box18652 = (function() {
var check_box18652 = null;
var check_box18652__1 = (function (name){return check_box18652.call(null,name,null);
});
var check_box18652__2 = (function (name,checked_QMARK_){return check_box18652.call(null,name,checked_QMARK_,"true");
});
var check_box18652__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box18652 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18652__1.call(this,name);
case 2:
return check_box18652__2.call(this,name,checked_QMARK_);
case 3:
return check_box18652__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18652.cljs$core$IFn$_invoke$arity$1 = check_box18652__1;
check_box18652.cljs$core$IFn$_invoke$arity$2 = check_box18652__2;
check_box18652.cljs$core$IFn$_invoke$arity$3 = check_box18652__3;
return check_box18652;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18652);
/**
* Creates a radio button.
*/
sablono.core.radio_button18653 = (function() {
var radio_button18653 = null;
var radio_button18653__1 = (function (group){return radio_button18653.call(null,group,null);
});
var radio_button18653__2 = (function (group,checked_QMARK_){return radio_button18653.call(null,group,checked_QMARK_,"true");
});
var radio_button18653__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button18653 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18653__1.call(this,group);
case 2:
return radio_button18653__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18653__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18653.cljs$core$IFn$_invoke$arity$1 = radio_button18653__1;
radio_button18653.cljs$core$IFn$_invoke$arity$2 = radio_button18653__2;
radio_button18653.cljs$core$IFn$_invoke$arity$3 = radio_button18653__3;
return radio_button18653;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18653);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18654 = (function() {
var select_options18654 = null;
var select_options18654__1 = (function (coll){return select_options18654.call(null,coll,null);
});
var select_options18654__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__18663(s__18664){return (new cljs.core.LazySeq(null,(function (){var s__18664__$1 = s__18664;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18664__$1);if(temp__4126__auto__)
{var s__18664__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18664__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18664__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18666 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18665 = (0);while(true){
if((i__18665 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__18665);cljs.core.chunk_append.call(null,b__18666,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18669 = x;var text = cljs.core.nth.call(null,vec__18669,(0),null);var val = cljs.core.nth.call(null,vec__18669,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18669,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18654.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18671 = (i__18665 + (1));
i__18665 = G__18671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18666),iter__18663.call(null,cljs.core.chunk_rest.call(null,s__18664__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18666),null);
}
} else
{var x = cljs.core.first.call(null,s__18664__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18670 = x;var text = cljs.core.nth.call(null,vec__18670,(0),null);var val = cljs.core.nth.call(null,vec__18670,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18670,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18654.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18663.call(null,cljs.core.rest.call(null,s__18664__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options18654 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18654__1.call(this,coll);
case 2:
return select_options18654__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18654.cljs$core$IFn$_invoke$arity$1 = select_options18654__1;
select_options18654.cljs$core$IFn$_invoke$arity$2 = select_options18654__2;
return select_options18654;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18654);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18672 = (function() {
var drop_down18672 = null;
var drop_down18672__2 = (function (name,options){return drop_down18672.call(null,name,options,null);
});
var drop_down18672__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18672 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18672__2.call(this,name,options);
case 3:
return drop_down18672__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18672.cljs$core$IFn$_invoke$arity$2 = drop_down18672__2;
drop_down18672.cljs$core$IFn$_invoke$arity$3 = drop_down18672__3;
return drop_down18672;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18672);
/**
* Creates a text area element.
*/
sablono.core.text_area18673 = (function() {
var text_area18673 = null;
var text_area18673__1 = (function (name){return text_area18673.call(null,name,null);
});
var text_area18673__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area18673 = function(name,value){
switch(arguments.length){
case 1:
return text_area18673__1.call(this,name);
case 2:
return text_area18673__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18673.cljs$core$IFn$_invoke$arity$1 = text_area18673__1;
text_area18673.cljs$core$IFn$_invoke$arity$2 = text_area18673__2;
return text_area18673;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18673);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18674 = (function label18674(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18674);
/**
* Creates a submit button.
*/
sablono.core.submit_button18675 = (function submit_button18675(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18675);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18676 = (function reset_button18676(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18676);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18677 = (function() { 
var form_to18677__delegate = function (p__18678,body){var vec__18680 = p__18678;var method = cljs.core.nth.call(null,vec__18680,(0),null);var action = cljs.core.nth.call(null,vec__18680,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18677 = function (p__18678,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18677__delegate.call(this,p__18678,body);};
form_to18677.cljs$lang$maxFixedArity = 1;
form_to18677.cljs$lang$applyTo = (function (arglist__18681){
var p__18678 = cljs.core.first(arglist__18681);
var body = cljs.core.rest(arglist__18681);
return form_to18677__delegate(p__18678,body);
});
form_to18677.cljs$core$IFn$_invoke$arity$variadic = form_to18677__delegate;
return form_to18677;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18677);

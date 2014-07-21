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
var G__56680__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__56679 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__56679,(0),null);var body = cljs.core.nthnext.call(null,vec__56679,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__56680 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__56680__delegate.call(this,args);};
G__56680.cljs$lang$maxFixedArity = 0;
G__56680.cljs$lang$applyTo = (function (arglist__56681){
var args = cljs.core.seq(arglist__56681);
return G__56680__delegate(args);
});
G__56680.cljs$core$IFn$_invoke$arity$variadic = G__56680__delegate;
return G__56680;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__56686(s__56687){return (new cljs.core.LazySeq(null,(function (){var s__56687__$1 = s__56687;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56687__$1);if(temp__4126__auto__)
{var s__56687__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56687__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56687__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56689 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56688 = (0);while(true){
if((i__56688 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__56688);cljs.core.chunk_append.call(null,b__56689,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__56690 = (i__56688 + (1));
i__56688 = G__56690;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56689),iter__56686.call(null,cljs.core.chunk_rest.call(null,s__56687__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56689),null);
}
} else
{var args = cljs.core.first.call(null,s__56687__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__56686.call(null,cljs.core.rest.call(null,s__56687__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__56695(s__56696){return (new cljs.core.LazySeq(null,(function (){var s__56696__$1 = s__56696;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56696__$1);if(temp__4126__auto__)
{var s__56696__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56696__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56696__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56698 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56697 = (0);while(true){
if((i__56697 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__56697);cljs.core.chunk_append.call(null,b__56698,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__56699 = (i__56697 + (1));
i__56697 = G__56699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56698),iter__56695.call(null,cljs.core.chunk_rest.call(null,s__56696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56698),null);
}
} else
{var style = cljs.core.first.call(null,s__56696__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__56695.call(null,cljs.core.rest.call(null,s__56696__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__56700){
var styles = cljs.core.seq(arglist__56700);
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
sablono.core.link_to56701 = (function() { 
var link_to56701__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to56701 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to56701__delegate.call(this,url,content);};
link_to56701.cljs$lang$maxFixedArity = 1;
link_to56701.cljs$lang$applyTo = (function (arglist__56702){
var url = cljs.core.first(arglist__56702);
var content = cljs.core.rest(arglist__56702);
return link_to56701__delegate(url,content);
});
link_to56701.cljs$core$IFn$_invoke$arity$variadic = link_to56701__delegate;
return link_to56701;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to56701);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to56703 = (function() { 
var mail_to56703__delegate = function (e_mail,p__56704){var vec__56706 = p__56704;var content = cljs.core.nth.call(null,vec__56706,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to56703 = function (e_mail,var_args){
var p__56704 = null;if (arguments.length > 1) {
  p__56704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to56703__delegate.call(this,e_mail,p__56704);};
mail_to56703.cljs$lang$maxFixedArity = 1;
mail_to56703.cljs$lang$applyTo = (function (arglist__56707){
var e_mail = cljs.core.first(arglist__56707);
var p__56704 = cljs.core.rest(arglist__56707);
return mail_to56703__delegate(e_mail,p__56704);
});
mail_to56703.cljs$core$IFn$_invoke$arity$variadic = mail_to56703__delegate;
return mail_to56703;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to56703);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list56708 = (function unordered_list56708(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__56713(s__56714){return (new cljs.core.LazySeq(null,(function (){var s__56714__$1 = s__56714;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56714__$1);if(temp__4126__auto__)
{var s__56714__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56714__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56714__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56716 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56715 = (0);while(true){
if((i__56715 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__56715);cljs.core.chunk_append.call(null,b__56716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__56717 = (i__56715 + (1));
i__56715 = G__56717;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56716),iter__56713.call(null,cljs.core.chunk_rest.call(null,s__56714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56716),null);
}
} else
{var x = cljs.core.first.call(null,s__56714__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__56713.call(null,cljs.core.rest.call(null,s__56714__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list56708);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list56718 = (function ordered_list56718(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__56723(s__56724){return (new cljs.core.LazySeq(null,(function (){var s__56724__$1 = s__56724;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56724__$1);if(temp__4126__auto__)
{var s__56724__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56724__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56724__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56726 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56725 = (0);while(true){
if((i__56725 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__56725);cljs.core.chunk_append.call(null,b__56726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__56727 = (i__56725 + (1));
i__56725 = G__56727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56726),iter__56723.call(null,cljs.core.chunk_rest.call(null,s__56724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56726),null);
}
} else
{var x = cljs.core.first.call(null,s__56724__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__56723.call(null,cljs.core.rest.call(null,s__56724__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list56718);
/**
* Create an image element.
*/
sablono.core.image56728 = (function() {
var image56728 = null;
var image56728__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image56728__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image56728 = function(src,alt){
switch(arguments.length){
case 1:
return image56728__1.call(this,src);
case 2:
return image56728__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image56728.cljs$core$IFn$_invoke$arity$1 = image56728__1;
image56728.cljs$core$IFn$_invoke$arity$2 = image56728__2;
return image56728;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image56728);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__56729_SHARP_,p2__56730_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56729_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__56730_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__56731_SHARP_,p2__56732_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56731_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__56732_SHARP_));
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
sablono.core.color_field56733 = (function() {
var color_field56733 = null;
var color_field56733__1 = (function (name__10461__auto__){return color_field56733.call(null,name__10461__auto__,null);
});
var color_field56733__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10461__auto__,value__10462__auto__);
});
color_field56733 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return color_field56733__1.call(this,name__10461__auto__);
case 2:
return color_field56733__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field56733.cljs$core$IFn$_invoke$arity$1 = color_field56733__1;
color_field56733.cljs$core$IFn$_invoke$arity$2 = color_field56733__2;
return color_field56733;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field56733);
/**
* Creates a date input field.
*/
sablono.core.date_field56734 = (function() {
var date_field56734 = null;
var date_field56734__1 = (function (name__10461__auto__){return date_field56734.call(null,name__10461__auto__,null);
});
var date_field56734__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10461__auto__,value__10462__auto__);
});
date_field56734 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return date_field56734__1.call(this,name__10461__auto__);
case 2:
return date_field56734__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field56734.cljs$core$IFn$_invoke$arity$1 = date_field56734__1;
date_field56734.cljs$core$IFn$_invoke$arity$2 = date_field56734__2;
return date_field56734;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field56734);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field56735 = (function() {
var datetime_field56735 = null;
var datetime_field56735__1 = (function (name__10461__auto__){return datetime_field56735.call(null,name__10461__auto__,null);
});
var datetime_field56735__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10461__auto__,value__10462__auto__);
});
datetime_field56735 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return datetime_field56735__1.call(this,name__10461__auto__);
case 2:
return datetime_field56735__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field56735.cljs$core$IFn$_invoke$arity$1 = datetime_field56735__1;
datetime_field56735.cljs$core$IFn$_invoke$arity$2 = datetime_field56735__2;
return datetime_field56735;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field56735);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field56736 = (function() {
var datetime_local_field56736 = null;
var datetime_local_field56736__1 = (function (name__10461__auto__){return datetime_local_field56736.call(null,name__10461__auto__,null);
});
var datetime_local_field56736__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10461__auto__,value__10462__auto__);
});
datetime_local_field56736 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return datetime_local_field56736__1.call(this,name__10461__auto__);
case 2:
return datetime_local_field56736__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field56736.cljs$core$IFn$_invoke$arity$1 = datetime_local_field56736__1;
datetime_local_field56736.cljs$core$IFn$_invoke$arity$2 = datetime_local_field56736__2;
return datetime_local_field56736;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field56736);
/**
* Creates a email input field.
*/
sablono.core.email_field56737 = (function() {
var email_field56737 = null;
var email_field56737__1 = (function (name__10461__auto__){return email_field56737.call(null,name__10461__auto__,null);
});
var email_field56737__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10461__auto__,value__10462__auto__);
});
email_field56737 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return email_field56737__1.call(this,name__10461__auto__);
case 2:
return email_field56737__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field56737.cljs$core$IFn$_invoke$arity$1 = email_field56737__1;
email_field56737.cljs$core$IFn$_invoke$arity$2 = email_field56737__2;
return email_field56737;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field56737);
/**
* Creates a file input field.
*/
sablono.core.file_field56738 = (function() {
var file_field56738 = null;
var file_field56738__1 = (function (name__10461__auto__){return file_field56738.call(null,name__10461__auto__,null);
});
var file_field56738__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10461__auto__,value__10462__auto__);
});
file_field56738 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return file_field56738__1.call(this,name__10461__auto__);
case 2:
return file_field56738__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field56738.cljs$core$IFn$_invoke$arity$1 = file_field56738__1;
file_field56738.cljs$core$IFn$_invoke$arity$2 = file_field56738__2;
return file_field56738;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field56738);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field56739 = (function() {
var hidden_field56739 = null;
var hidden_field56739__1 = (function (name__10461__auto__){return hidden_field56739.call(null,name__10461__auto__,null);
});
var hidden_field56739__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10461__auto__,value__10462__auto__);
});
hidden_field56739 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return hidden_field56739__1.call(this,name__10461__auto__);
case 2:
return hidden_field56739__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field56739.cljs$core$IFn$_invoke$arity$1 = hidden_field56739__1;
hidden_field56739.cljs$core$IFn$_invoke$arity$2 = hidden_field56739__2;
return hidden_field56739;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field56739);
/**
* Creates a month input field.
*/
sablono.core.month_field56740 = (function() {
var month_field56740 = null;
var month_field56740__1 = (function (name__10461__auto__){return month_field56740.call(null,name__10461__auto__,null);
});
var month_field56740__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10461__auto__,value__10462__auto__);
});
month_field56740 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return month_field56740__1.call(this,name__10461__auto__);
case 2:
return month_field56740__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field56740.cljs$core$IFn$_invoke$arity$1 = month_field56740__1;
month_field56740.cljs$core$IFn$_invoke$arity$2 = month_field56740__2;
return month_field56740;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field56740);
/**
* Creates a number input field.
*/
sablono.core.number_field56741 = (function() {
var number_field56741 = null;
var number_field56741__1 = (function (name__10461__auto__){return number_field56741.call(null,name__10461__auto__,null);
});
var number_field56741__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10461__auto__,value__10462__auto__);
});
number_field56741 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return number_field56741__1.call(this,name__10461__auto__);
case 2:
return number_field56741__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field56741.cljs$core$IFn$_invoke$arity$1 = number_field56741__1;
number_field56741.cljs$core$IFn$_invoke$arity$2 = number_field56741__2;
return number_field56741;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field56741);
/**
* Creates a password input field.
*/
sablono.core.password_field56742 = (function() {
var password_field56742 = null;
var password_field56742__1 = (function (name__10461__auto__){return password_field56742.call(null,name__10461__auto__,null);
});
var password_field56742__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10461__auto__,value__10462__auto__);
});
password_field56742 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return password_field56742__1.call(this,name__10461__auto__);
case 2:
return password_field56742__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field56742.cljs$core$IFn$_invoke$arity$1 = password_field56742__1;
password_field56742.cljs$core$IFn$_invoke$arity$2 = password_field56742__2;
return password_field56742;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field56742);
/**
* Creates a range input field.
*/
sablono.core.range_field56743 = (function() {
var range_field56743 = null;
var range_field56743__1 = (function (name__10461__auto__){return range_field56743.call(null,name__10461__auto__,null);
});
var range_field56743__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10461__auto__,value__10462__auto__);
});
range_field56743 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return range_field56743__1.call(this,name__10461__auto__);
case 2:
return range_field56743__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field56743.cljs$core$IFn$_invoke$arity$1 = range_field56743__1;
range_field56743.cljs$core$IFn$_invoke$arity$2 = range_field56743__2;
return range_field56743;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field56743);
/**
* Creates a search input field.
*/
sablono.core.search_field56744 = (function() {
var search_field56744 = null;
var search_field56744__1 = (function (name__10461__auto__){return search_field56744.call(null,name__10461__auto__,null);
});
var search_field56744__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10461__auto__,value__10462__auto__);
});
search_field56744 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return search_field56744__1.call(this,name__10461__auto__);
case 2:
return search_field56744__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field56744.cljs$core$IFn$_invoke$arity$1 = search_field56744__1;
search_field56744.cljs$core$IFn$_invoke$arity$2 = search_field56744__2;
return search_field56744;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field56744);
/**
* Creates a tel input field.
*/
sablono.core.tel_field56745 = (function() {
var tel_field56745 = null;
var tel_field56745__1 = (function (name__10461__auto__){return tel_field56745.call(null,name__10461__auto__,null);
});
var tel_field56745__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10461__auto__,value__10462__auto__);
});
tel_field56745 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return tel_field56745__1.call(this,name__10461__auto__);
case 2:
return tel_field56745__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field56745.cljs$core$IFn$_invoke$arity$1 = tel_field56745__1;
tel_field56745.cljs$core$IFn$_invoke$arity$2 = tel_field56745__2;
return tel_field56745;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field56745);
/**
* Creates a text input field.
*/
sablono.core.text_field56746 = (function() {
var text_field56746 = null;
var text_field56746__1 = (function (name__10461__auto__){return text_field56746.call(null,name__10461__auto__,null);
});
var text_field56746__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10461__auto__,value__10462__auto__);
});
text_field56746 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return text_field56746__1.call(this,name__10461__auto__);
case 2:
return text_field56746__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field56746.cljs$core$IFn$_invoke$arity$1 = text_field56746__1;
text_field56746.cljs$core$IFn$_invoke$arity$2 = text_field56746__2;
return text_field56746;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field56746);
/**
* Creates a time input field.
*/
sablono.core.time_field56747 = (function() {
var time_field56747 = null;
var time_field56747__1 = (function (name__10461__auto__){return time_field56747.call(null,name__10461__auto__,null);
});
var time_field56747__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10461__auto__,value__10462__auto__);
});
time_field56747 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return time_field56747__1.call(this,name__10461__auto__);
case 2:
return time_field56747__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field56747.cljs$core$IFn$_invoke$arity$1 = time_field56747__1;
time_field56747.cljs$core$IFn$_invoke$arity$2 = time_field56747__2;
return time_field56747;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field56747);
/**
* Creates a url input field.
*/
sablono.core.url_field56748 = (function() {
var url_field56748 = null;
var url_field56748__1 = (function (name__10461__auto__){return url_field56748.call(null,name__10461__auto__,null);
});
var url_field56748__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10461__auto__,value__10462__auto__);
});
url_field56748 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return url_field56748__1.call(this,name__10461__auto__);
case 2:
return url_field56748__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field56748.cljs$core$IFn$_invoke$arity$1 = url_field56748__1;
url_field56748.cljs$core$IFn$_invoke$arity$2 = url_field56748__2;
return url_field56748;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field56748);
/**
* Creates a week input field.
*/
sablono.core.week_field56749 = (function() {
var week_field56749 = null;
var week_field56749__1 = (function (name__10461__auto__){return week_field56749.call(null,name__10461__auto__,null);
});
var week_field56749__2 = (function (name__10461__auto__,value__10462__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10461__auto__,value__10462__auto__);
});
week_field56749 = function(name__10461__auto__,value__10462__auto__){
switch(arguments.length){
case 1:
return week_field56749__1.call(this,name__10461__auto__);
case 2:
return week_field56749__2.call(this,name__10461__auto__,value__10462__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field56749.cljs$core$IFn$_invoke$arity$1 = week_field56749__1;
week_field56749.cljs$core$IFn$_invoke$arity$2 = week_field56749__2;
return week_field56749;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field56749);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box56750 = (function() {
var check_box56750 = null;
var check_box56750__1 = (function (name){return check_box56750.call(null,name,null);
});
var check_box56750__2 = (function (name,checked_QMARK_){return check_box56750.call(null,name,checked_QMARK_,"true");
});
var check_box56750__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box56750 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box56750__1.call(this,name);
case 2:
return check_box56750__2.call(this,name,checked_QMARK_);
case 3:
return check_box56750__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box56750.cljs$core$IFn$_invoke$arity$1 = check_box56750__1;
check_box56750.cljs$core$IFn$_invoke$arity$2 = check_box56750__2;
check_box56750.cljs$core$IFn$_invoke$arity$3 = check_box56750__3;
return check_box56750;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box56750);
/**
* Creates a radio button.
*/
sablono.core.radio_button56751 = (function() {
var radio_button56751 = null;
var radio_button56751__1 = (function (group){return radio_button56751.call(null,group,null);
});
var radio_button56751__2 = (function (group,checked_QMARK_){return radio_button56751.call(null,group,checked_QMARK_,"true");
});
var radio_button56751__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button56751 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button56751__1.call(this,group);
case 2:
return radio_button56751__2.call(this,group,checked_QMARK_);
case 3:
return radio_button56751__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button56751.cljs$core$IFn$_invoke$arity$1 = radio_button56751__1;
radio_button56751.cljs$core$IFn$_invoke$arity$2 = radio_button56751__2;
radio_button56751.cljs$core$IFn$_invoke$arity$3 = radio_button56751__3;
return radio_button56751;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button56751);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options56752 = (function() {
var select_options56752 = null;
var select_options56752__1 = (function (coll){return select_options56752.call(null,coll,null);
});
var select_options56752__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__56761(s__56762){return (new cljs.core.LazySeq(null,(function (){var s__56762__$1 = s__56762;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56762__$1);if(temp__4126__auto__)
{var s__56762__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56762__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__56762__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__56764 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__56763 = (0);while(true){
if((i__56763 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__56763);cljs.core.chunk_append.call(null,b__56764,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__56767 = x;var text = cljs.core.nth.call(null,vec__56767,(0),null);var val = cljs.core.nth.call(null,vec__56767,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__56767,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options56752.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__56769 = (i__56763 + (1));
i__56763 = G__56769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56764),iter__56761.call(null,cljs.core.chunk_rest.call(null,s__56762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56764),null);
}
} else
{var x = cljs.core.first.call(null,s__56762__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__56768 = x;var text = cljs.core.nth.call(null,vec__56768,(0),null);var val = cljs.core.nth.call(null,vec__56768,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__56768,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options56752.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__56761.call(null,cljs.core.rest.call(null,s__56762__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options56752 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options56752__1.call(this,coll);
case 2:
return select_options56752__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options56752.cljs$core$IFn$_invoke$arity$1 = select_options56752__1;
select_options56752.cljs$core$IFn$_invoke$arity$2 = select_options56752__2;
return select_options56752;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options56752);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down56770 = (function() {
var drop_down56770 = null;
var drop_down56770__2 = (function (name,options){return drop_down56770.call(null,name,options,null);
});
var drop_down56770__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down56770 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down56770__2.call(this,name,options);
case 3:
return drop_down56770__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down56770.cljs$core$IFn$_invoke$arity$2 = drop_down56770__2;
drop_down56770.cljs$core$IFn$_invoke$arity$3 = drop_down56770__3;
return drop_down56770;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down56770);
/**
* Creates a text area element.
*/
sablono.core.text_area56771 = (function() {
var text_area56771 = null;
var text_area56771__1 = (function (name){return text_area56771.call(null,name,null);
});
var text_area56771__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area56771 = function(name,value){
switch(arguments.length){
case 1:
return text_area56771__1.call(this,name);
case 2:
return text_area56771__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area56771.cljs$core$IFn$_invoke$arity$1 = text_area56771__1;
text_area56771.cljs$core$IFn$_invoke$arity$2 = text_area56771__2;
return text_area56771;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area56771);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label56772 = (function label56772(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label56772);
/**
* Creates a submit button.
*/
sablono.core.submit_button56773 = (function submit_button56773(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button56773);
/**
* Creates a form reset button.
*/
sablono.core.reset_button56774 = (function reset_button56774(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button56774);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to56775 = (function() { 
var form_to56775__delegate = function (p__56776,body){var vec__56778 = p__56776;var method = cljs.core.nth.call(null,vec__56778,(0),null);var action = cljs.core.nth.call(null,vec__56778,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to56775 = function (p__56776,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to56775__delegate.call(this,p__56776,body);};
form_to56775.cljs$lang$maxFixedArity = 1;
form_to56775.cljs$lang$applyTo = (function (arglist__56779){
var p__56776 = cljs.core.first(arglist__56779);
var body = cljs.core.rest(arglist__56779);
return form_to56775__delegate(p__56776,body);
});
form_to56775.cljs$core$IFn$_invoke$arity$variadic = form_to56775__delegate;
return form_to56775;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to56775);

//# sourceMappingURL=core.js.map
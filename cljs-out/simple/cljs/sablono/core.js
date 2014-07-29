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
var G__30598__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__30597 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__30597,(0),null);var body = cljs.core.nthnext.call(null,vec__30597,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__30598 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30598__delegate.call(this,args);};
G__30598.cljs$lang$maxFixedArity = 0;
G__30598.cljs$lang$applyTo = (function (arglist__30599){
var args = cljs.core.seq(arglist__30599);
return G__30598__delegate(args);
});
G__30598.cljs$core$IFn$_invoke$arity$variadic = G__30598__delegate;
return G__30598;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4268__auto__ = (function iter__30604(s__30605){return (new cljs.core.LazySeq(null,(function (){var s__30605__$1 = s__30605;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30605__$1);if(temp__4126__auto__)
{var s__30605__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30605__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30605__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30607 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30606 = (0);while(true){
if((i__30606 < size__4267__auto__))
{var args = cljs.core._nth.call(null,c__4266__auto__,i__30606);cljs.core.chunk_append.call(null,b__30607,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__30608 = (i__30606 + (1));
i__30606 = G__30608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30607),iter__30604.call(null,cljs.core.chunk_rest.call(null,s__30605__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30607),null);
}
} else
{var args = cljs.core.first.call(null,s__30605__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__30604.call(null,cljs.core.rest.call(null,s__30605__$2)));
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
var include_css__delegate = function (styles){var iter__4268__auto__ = (function iter__30613(s__30614){return (new cljs.core.LazySeq(null,(function (){var s__30614__$1 = s__30614;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30614__$1);if(temp__4126__auto__)
{var s__30614__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30614__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30614__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30616 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30615 = (0);while(true){
if((i__30615 < size__4267__auto__))
{var style = cljs.core._nth.call(null,c__4266__auto__,i__30615);cljs.core.chunk_append.call(null,b__30616,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__30617 = (i__30615 + (1));
i__30615 = G__30617;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30616),iter__30613.call(null,cljs.core.chunk_rest.call(null,s__30614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30616),null);
}
} else
{var style = cljs.core.first.call(null,s__30614__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__30613.call(null,cljs.core.rest.call(null,s__30614__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__30618){
var styles = cljs.core.seq(arglist__30618);
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
sablono.core.link_to30619 = (function() { 
var link_to30619__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to30619 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to30619__delegate.call(this,url,content);};
link_to30619.cljs$lang$maxFixedArity = 1;
link_to30619.cljs$lang$applyTo = (function (arglist__30620){
var url = cljs.core.first(arglist__30620);
var content = cljs.core.rest(arglist__30620);
return link_to30619__delegate(url,content);
});
link_to30619.cljs$core$IFn$_invoke$arity$variadic = link_to30619__delegate;
return link_to30619;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30619);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to30621 = (function() { 
var mail_to30621__delegate = function (e_mail,p__30622){var vec__30624 = p__30622;var content = cljs.core.nth.call(null,vec__30624,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3543__auto__ = content;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to30621 = function (e_mail,var_args){
var p__30622 = null;if (arguments.length > 1) {
  p__30622 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to30621__delegate.call(this,e_mail,p__30622);};
mail_to30621.cljs$lang$maxFixedArity = 1;
mail_to30621.cljs$lang$applyTo = (function (arglist__30625){
var e_mail = cljs.core.first(arglist__30625);
var p__30622 = cljs.core.rest(arglist__30625);
return mail_to30621__delegate(e_mail,p__30622);
});
mail_to30621.cljs$core$IFn$_invoke$arity$variadic = mail_to30621__delegate;
return mail_to30621;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30621);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list30626 = (function unordered_list30626(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4268__auto__ = (function iter__30631(s__30632){return (new cljs.core.LazySeq(null,(function (){var s__30632__$1 = s__30632;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30632__$1);if(temp__4126__auto__)
{var s__30632__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30632__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30632__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30634 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30633 = (0);while(true){
if((i__30633 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30633);cljs.core.chunk_append.call(null,b__30634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__30635 = (i__30633 + (1));
i__30633 = G__30635;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30634),iter__30631.call(null,cljs.core.chunk_rest.call(null,s__30632__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30634),null);
}
} else
{var x = cljs.core.first.call(null,s__30632__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__30631.call(null,cljs.core.rest.call(null,s__30632__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30626);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list30636 = (function ordered_list30636(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4268__auto__ = (function iter__30641(s__30642){return (new cljs.core.LazySeq(null,(function (){var s__30642__$1 = s__30642;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30642__$1);if(temp__4126__auto__)
{var s__30642__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30642__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30642__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30644 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30643 = (0);while(true){
if((i__30643 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30643);cljs.core.chunk_append.call(null,b__30644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__30645 = (i__30643 + (1));
i__30643 = G__30645;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30644),iter__30641.call(null,cljs.core.chunk_rest.call(null,s__30642__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30644),null);
}
} else
{var x = cljs.core.first.call(null,s__30642__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__30641.call(null,cljs.core.rest.call(null,s__30642__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30636);
/**
* Create an image element.
*/
sablono.core.image30646 = (function() {
var image30646 = null;
var image30646__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image30646__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image30646 = function(src,alt){
switch(arguments.length){
case 1:
return image30646__1.call(this,src);
case 2:
return image30646__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image30646.cljs$core$IFn$_invoke$arity$1 = image30646__1;
image30646.cljs$core$IFn$_invoke$arity$2 = image30646__2;
return image30646;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30646);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__30647_SHARP_,p2__30648_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30647_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30648_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__30649_SHARP_,p2__30650_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30649_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__30650_SHARP_));
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
sablono.core.color_field30651 = (function() {
var color_field30651 = null;
var color_field30651__1 = (function (name__10242__auto__){return color_field30651.call(null,name__10242__auto__,null);
});
var color_field30651__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10242__auto__,value__10243__auto__);
});
color_field30651 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return color_field30651__1.call(this,name__10242__auto__);
case 2:
return color_field30651__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field30651.cljs$core$IFn$_invoke$arity$1 = color_field30651__1;
color_field30651.cljs$core$IFn$_invoke$arity$2 = color_field30651__2;
return color_field30651;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30651);
/**
* Creates a date input field.
*/
sablono.core.date_field30652 = (function() {
var date_field30652 = null;
var date_field30652__1 = (function (name__10242__auto__){return date_field30652.call(null,name__10242__auto__,null);
});
var date_field30652__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10242__auto__,value__10243__auto__);
});
date_field30652 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return date_field30652__1.call(this,name__10242__auto__);
case 2:
return date_field30652__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field30652.cljs$core$IFn$_invoke$arity$1 = date_field30652__1;
date_field30652.cljs$core$IFn$_invoke$arity$2 = date_field30652__2;
return date_field30652;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30652);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field30653 = (function() {
var datetime_field30653 = null;
var datetime_field30653__1 = (function (name__10242__auto__){return datetime_field30653.call(null,name__10242__auto__,null);
});
var datetime_field30653__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10242__auto__,value__10243__auto__);
});
datetime_field30653 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_field30653__1.call(this,name__10242__auto__);
case 2:
return datetime_field30653__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field30653.cljs$core$IFn$_invoke$arity$1 = datetime_field30653__1;
datetime_field30653.cljs$core$IFn$_invoke$arity$2 = datetime_field30653__2;
return datetime_field30653;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30653);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field30654 = (function() {
var datetime_local_field30654 = null;
var datetime_local_field30654__1 = (function (name__10242__auto__){return datetime_local_field30654.call(null,name__10242__auto__,null);
});
var datetime_local_field30654__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10242__auto__,value__10243__auto__);
});
datetime_local_field30654 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return datetime_local_field30654__1.call(this,name__10242__auto__);
case 2:
return datetime_local_field30654__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field30654.cljs$core$IFn$_invoke$arity$1 = datetime_local_field30654__1;
datetime_local_field30654.cljs$core$IFn$_invoke$arity$2 = datetime_local_field30654__2;
return datetime_local_field30654;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30654);
/**
* Creates a email input field.
*/
sablono.core.email_field30655 = (function() {
var email_field30655 = null;
var email_field30655__1 = (function (name__10242__auto__){return email_field30655.call(null,name__10242__auto__,null);
});
var email_field30655__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10242__auto__,value__10243__auto__);
});
email_field30655 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return email_field30655__1.call(this,name__10242__auto__);
case 2:
return email_field30655__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field30655.cljs$core$IFn$_invoke$arity$1 = email_field30655__1;
email_field30655.cljs$core$IFn$_invoke$arity$2 = email_field30655__2;
return email_field30655;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30655);
/**
* Creates a file input field.
*/
sablono.core.file_field30656 = (function() {
var file_field30656 = null;
var file_field30656__1 = (function (name__10242__auto__){return file_field30656.call(null,name__10242__auto__,null);
});
var file_field30656__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10242__auto__,value__10243__auto__);
});
file_field30656 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return file_field30656__1.call(this,name__10242__auto__);
case 2:
return file_field30656__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field30656.cljs$core$IFn$_invoke$arity$1 = file_field30656__1;
file_field30656.cljs$core$IFn$_invoke$arity$2 = file_field30656__2;
return file_field30656;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30656);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field30657 = (function() {
var hidden_field30657 = null;
var hidden_field30657__1 = (function (name__10242__auto__){return hidden_field30657.call(null,name__10242__auto__,null);
});
var hidden_field30657__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10242__auto__,value__10243__auto__);
});
hidden_field30657 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return hidden_field30657__1.call(this,name__10242__auto__);
case 2:
return hidden_field30657__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field30657.cljs$core$IFn$_invoke$arity$1 = hidden_field30657__1;
hidden_field30657.cljs$core$IFn$_invoke$arity$2 = hidden_field30657__2;
return hidden_field30657;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30657);
/**
* Creates a month input field.
*/
sablono.core.month_field30658 = (function() {
var month_field30658 = null;
var month_field30658__1 = (function (name__10242__auto__){return month_field30658.call(null,name__10242__auto__,null);
});
var month_field30658__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10242__auto__,value__10243__auto__);
});
month_field30658 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return month_field30658__1.call(this,name__10242__auto__);
case 2:
return month_field30658__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field30658.cljs$core$IFn$_invoke$arity$1 = month_field30658__1;
month_field30658.cljs$core$IFn$_invoke$arity$2 = month_field30658__2;
return month_field30658;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30658);
/**
* Creates a number input field.
*/
sablono.core.number_field30659 = (function() {
var number_field30659 = null;
var number_field30659__1 = (function (name__10242__auto__){return number_field30659.call(null,name__10242__auto__,null);
});
var number_field30659__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10242__auto__,value__10243__auto__);
});
number_field30659 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return number_field30659__1.call(this,name__10242__auto__);
case 2:
return number_field30659__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field30659.cljs$core$IFn$_invoke$arity$1 = number_field30659__1;
number_field30659.cljs$core$IFn$_invoke$arity$2 = number_field30659__2;
return number_field30659;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30659);
/**
* Creates a password input field.
*/
sablono.core.password_field30660 = (function() {
var password_field30660 = null;
var password_field30660__1 = (function (name__10242__auto__){return password_field30660.call(null,name__10242__auto__,null);
});
var password_field30660__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10242__auto__,value__10243__auto__);
});
password_field30660 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return password_field30660__1.call(this,name__10242__auto__);
case 2:
return password_field30660__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field30660.cljs$core$IFn$_invoke$arity$1 = password_field30660__1;
password_field30660.cljs$core$IFn$_invoke$arity$2 = password_field30660__2;
return password_field30660;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30660);
/**
* Creates a range input field.
*/
sablono.core.range_field30661 = (function() {
var range_field30661 = null;
var range_field30661__1 = (function (name__10242__auto__){return range_field30661.call(null,name__10242__auto__,null);
});
var range_field30661__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10242__auto__,value__10243__auto__);
});
range_field30661 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return range_field30661__1.call(this,name__10242__auto__);
case 2:
return range_field30661__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field30661.cljs$core$IFn$_invoke$arity$1 = range_field30661__1;
range_field30661.cljs$core$IFn$_invoke$arity$2 = range_field30661__2;
return range_field30661;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30661);
/**
* Creates a search input field.
*/
sablono.core.search_field30662 = (function() {
var search_field30662 = null;
var search_field30662__1 = (function (name__10242__auto__){return search_field30662.call(null,name__10242__auto__,null);
});
var search_field30662__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10242__auto__,value__10243__auto__);
});
search_field30662 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return search_field30662__1.call(this,name__10242__auto__);
case 2:
return search_field30662__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field30662.cljs$core$IFn$_invoke$arity$1 = search_field30662__1;
search_field30662.cljs$core$IFn$_invoke$arity$2 = search_field30662__2;
return search_field30662;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30662);
/**
* Creates a tel input field.
*/
sablono.core.tel_field30663 = (function() {
var tel_field30663 = null;
var tel_field30663__1 = (function (name__10242__auto__){return tel_field30663.call(null,name__10242__auto__,null);
});
var tel_field30663__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10242__auto__,value__10243__auto__);
});
tel_field30663 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return tel_field30663__1.call(this,name__10242__auto__);
case 2:
return tel_field30663__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field30663.cljs$core$IFn$_invoke$arity$1 = tel_field30663__1;
tel_field30663.cljs$core$IFn$_invoke$arity$2 = tel_field30663__2;
return tel_field30663;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30663);
/**
* Creates a text input field.
*/
sablono.core.text_field30664 = (function() {
var text_field30664 = null;
var text_field30664__1 = (function (name__10242__auto__){return text_field30664.call(null,name__10242__auto__,null);
});
var text_field30664__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10242__auto__,value__10243__auto__);
});
text_field30664 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return text_field30664__1.call(this,name__10242__auto__);
case 2:
return text_field30664__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field30664.cljs$core$IFn$_invoke$arity$1 = text_field30664__1;
text_field30664.cljs$core$IFn$_invoke$arity$2 = text_field30664__2;
return text_field30664;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30664);
/**
* Creates a time input field.
*/
sablono.core.time_field30665 = (function() {
var time_field30665 = null;
var time_field30665__1 = (function (name__10242__auto__){return time_field30665.call(null,name__10242__auto__,null);
});
var time_field30665__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10242__auto__,value__10243__auto__);
});
time_field30665 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return time_field30665__1.call(this,name__10242__auto__);
case 2:
return time_field30665__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field30665.cljs$core$IFn$_invoke$arity$1 = time_field30665__1;
time_field30665.cljs$core$IFn$_invoke$arity$2 = time_field30665__2;
return time_field30665;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30665);
/**
* Creates a url input field.
*/
sablono.core.url_field30666 = (function() {
var url_field30666 = null;
var url_field30666__1 = (function (name__10242__auto__){return url_field30666.call(null,name__10242__auto__,null);
});
var url_field30666__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10242__auto__,value__10243__auto__);
});
url_field30666 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return url_field30666__1.call(this,name__10242__auto__);
case 2:
return url_field30666__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field30666.cljs$core$IFn$_invoke$arity$1 = url_field30666__1;
url_field30666.cljs$core$IFn$_invoke$arity$2 = url_field30666__2;
return url_field30666;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30666);
/**
* Creates a week input field.
*/
sablono.core.week_field30667 = (function() {
var week_field30667 = null;
var week_field30667__1 = (function (name__10242__auto__){return week_field30667.call(null,name__10242__auto__,null);
});
var week_field30667__2 = (function (name__10242__auto__,value__10243__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10242__auto__,value__10243__auto__);
});
week_field30667 = function(name__10242__auto__,value__10243__auto__){
switch(arguments.length){
case 1:
return week_field30667__1.call(this,name__10242__auto__);
case 2:
return week_field30667__2.call(this,name__10242__auto__,value__10243__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field30667.cljs$core$IFn$_invoke$arity$1 = week_field30667__1;
week_field30667.cljs$core$IFn$_invoke$arity$2 = week_field30667__2;
return week_field30667;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30667);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box30668 = (function() {
var check_box30668 = null;
var check_box30668__1 = (function (name){return check_box30668.call(null,name,null);
});
var check_box30668__2 = (function (name,checked_QMARK_){return check_box30668.call(null,name,checked_QMARK_,"true");
});
var check_box30668__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box30668 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box30668__1.call(this,name);
case 2:
return check_box30668__2.call(this,name,checked_QMARK_);
case 3:
return check_box30668__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box30668.cljs$core$IFn$_invoke$arity$1 = check_box30668__1;
check_box30668.cljs$core$IFn$_invoke$arity$2 = check_box30668__2;
check_box30668.cljs$core$IFn$_invoke$arity$3 = check_box30668__3;
return check_box30668;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30668);
/**
* Creates a radio button.
*/
sablono.core.radio_button30669 = (function() {
var radio_button30669 = null;
var radio_button30669__1 = (function (group){return radio_button30669.call(null,group,null);
});
var radio_button30669__2 = (function (group,checked_QMARK_){return radio_button30669.call(null,group,checked_QMARK_,"true");
});
var radio_button30669__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button30669 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button30669__1.call(this,group);
case 2:
return radio_button30669__2.call(this,group,checked_QMARK_);
case 3:
return radio_button30669__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button30669.cljs$core$IFn$_invoke$arity$1 = radio_button30669__1;
radio_button30669.cljs$core$IFn$_invoke$arity$2 = radio_button30669__2;
radio_button30669.cljs$core$IFn$_invoke$arity$3 = radio_button30669__3;
return radio_button30669;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30669);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options30670 = (function() {
var select_options30670 = null;
var select_options30670__1 = (function (coll){return select_options30670.call(null,coll,null);
});
var select_options30670__2 = (function (coll,selected){var iter__4268__auto__ = (function iter__30679(s__30680){return (new cljs.core.LazySeq(null,(function (){var s__30680__$1 = s__30680;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30680__$1);if(temp__4126__auto__)
{var s__30680__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30680__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30680__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30682 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30681 = (0);while(true){
if((i__30681 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__30681);cljs.core.chunk_append.call(null,b__30682,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30685 = x;var text = cljs.core.nth.call(null,vec__30685,(0),null);var val = cljs.core.nth.call(null,vec__30685,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__30685,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options30670.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__30687 = (i__30681 + (1));
i__30681 = G__30687;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30682),iter__30679.call(null,cljs.core.chunk_rest.call(null,s__30680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30682),null);
}
} else
{var x = cljs.core.first.call(null,s__30680__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30686 = x;var text = cljs.core.nth.call(null,vec__30686,(0),null);var val = cljs.core.nth.call(null,vec__30686,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__30686,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options30670.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__30679.call(null,cljs.core.rest.call(null,s__30680__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,coll);
});
select_options30670 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options30670__1.call(this,coll);
case 2:
return select_options30670__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options30670.cljs$core$IFn$_invoke$arity$1 = select_options30670__1;
select_options30670.cljs$core$IFn$_invoke$arity$2 = select_options30670__2;
return select_options30670;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30670);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down30688 = (function() {
var drop_down30688 = null;
var drop_down30688__2 = (function (name,options){return drop_down30688.call(null,name,options,null);
});
var drop_down30688__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down30688 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down30688__2.call(this,name,options);
case 3:
return drop_down30688__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down30688.cljs$core$IFn$_invoke$arity$2 = drop_down30688__2;
drop_down30688.cljs$core$IFn$_invoke$arity$3 = drop_down30688__3;
return drop_down30688;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30688);
/**
* Creates a text area element.
*/
sablono.core.text_area30689 = (function() {
var text_area30689 = null;
var text_area30689__1 = (function (name){return text_area30689.call(null,name,null);
});
var text_area30689__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area30689 = function(name,value){
switch(arguments.length){
case 1:
return text_area30689__1.call(this,name);
case 2:
return text_area30689__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area30689.cljs$core$IFn$_invoke$arity$1 = text_area30689__1;
text_area30689.cljs$core$IFn$_invoke$arity$2 = text_area30689__2;
return text_area30689;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30689);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label30690 = (function label30690(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30690);
/**
* Creates a submit button.
*/
sablono.core.submit_button30691 = (function submit_button30691(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30691);
/**
* Creates a form reset button.
*/
sablono.core.reset_button30692 = (function reset_button30692(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30692);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to30693 = (function() { 
var form_to30693__delegate = function (p__30694,body){var vec__30696 = p__30694;var method = cljs.core.nth.call(null,vec__30696,(0),null);var action = cljs.core.nth.call(null,vec__30696,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to30693 = function (p__30694,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to30693__delegate.call(this,p__30694,body);};
form_to30693.cljs$lang$maxFixedArity = 1;
form_to30693.cljs$lang$applyTo = (function (arglist__30697){
var p__30694 = cljs.core.first(arglist__30697);
var body = cljs.core.rest(arglist__30697);
return form_to30693__delegate(p__30694,body);
});
form_to30693.cljs$core$IFn$_invoke$arity$variadic = form_to30693__delegate;
return form_to30693;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30693);

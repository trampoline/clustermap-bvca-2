// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_28362 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28363 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28364 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28363,table_section_wrapper_28363,opt_wrapper_28362,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28364,table_section_wrapper_28363,cell_wrapper_28364,opt_wrapper_28362,table_section_wrapper_28363,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28363]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28369 = cljs.core.seq.call(null,tbody);var chunk__28370 = null;var count__28371 = 0;var i__28372 = 0;while(true){
if((i__28372 < count__28371))
{var child = cljs.core._nth.call(null,chunk__28370,i__28372);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28373 = seq__28369;
var G__28374 = chunk__28370;
var G__28375 = count__28371;
var G__28376 = (i__28372 + 1);
seq__28369 = G__28373;
chunk__28370 = G__28374;
count__28371 = G__28375;
i__28372 = G__28376;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28369);if(temp__4092__auto__)
{var seq__28369__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28369__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28369__$1);{
var G__28377 = cljs.core.chunk_rest.call(null,seq__28369__$1);
var G__28378 = c__4189__auto__;
var G__28379 = cljs.core.count.call(null,c__4189__auto__);
var G__28380 = 0;
seq__28369 = G__28377;
chunk__28370 = G__28378;
count__28371 = G__28379;
i__28372 = G__28380;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28369__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28381 = cljs.core.next.call(null,seq__28369__$1);
var G__28382 = null;
var G__28383 = 0;
var G__28384 = 0;
seq__28369 = G__28381;
chunk__28370 = G__28382;
count__28371 = G__28383;
i__28372 = G__28384;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28386 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28386,0,null);var start_wrap = cljs.core.nth.call(null,vec__28386,1,null);var end_wrap = cljs.core.nth.call(null,vec__28386,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28387 = wrapper.lastChild;
var G__28388 = (level - 1);
wrapper = G__28387;
level = G__28388;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj28390 = {};return obj28390;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__28391){
var mesg = cljs.core.seq(arglist__28391);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__28392){
var mesg = cljs.core.seq(arglist__28392);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__28393){
var contents = cljs.core.seq(arglist__28393);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28394_SHARP_){return p1__28394_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28395_SHARP_,p2__28396_SHARP_){return goog.dom.insertChildAt(p1__28395_SHARP_,p2__28396_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28398_SHARP_,p2__28397_SHARP_){return goog.dom.insertSiblingBefore(p2__28397_SHARP_,p1__28398_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28400_SHARP_,p2__28399_SHARP_){return goog.dom.insertSiblingAfter(p2__28399_SHARP_,p1__28400_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28402_SHARP_,p2__28401_SHARP_){return goog.dom.replaceNode(p2__28401_SHARP_,p1__28402_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__28407_28411 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28408_28412 = null;var count__28409_28413 = 0;var i__28410_28414 = 0;while(true){
if((i__28410_28414 < count__28409_28413))
{var n_28415 = cljs.core._nth.call(null,chunk__28408_28412,i__28410_28414);goog.style.setStyle(n_28415,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28416 = seq__28407_28411;
var G__28417 = chunk__28408_28412;
var G__28418 = count__28409_28413;
var G__28419 = (i__28410_28414 + 1);
seq__28407_28411 = G__28416;
chunk__28408_28412 = G__28417;
count__28409_28413 = G__28418;
i__28410_28414 = G__28419;
continue;
}
} else
{var temp__4092__auto___28420 = cljs.core.seq.call(null,seq__28407_28411);if(temp__4092__auto___28420)
{var seq__28407_28421__$1 = temp__4092__auto___28420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28407_28421__$1))
{var c__4189__auto___28422 = cljs.core.chunk_first.call(null,seq__28407_28421__$1);{
var G__28423 = cljs.core.chunk_rest.call(null,seq__28407_28421__$1);
var G__28424 = c__4189__auto___28422;
var G__28425 = cljs.core.count.call(null,c__4189__auto___28422);
var G__28426 = 0;
seq__28407_28411 = G__28423;
chunk__28408_28412 = G__28424;
count__28409_28413 = G__28425;
i__28410_28414 = G__28426;
continue;
}
} else
{var n_28427 = cljs.core.first.call(null,seq__28407_28421__$1);goog.style.setStyle(n_28427,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28428 = cljs.core.next.call(null,seq__28407_28421__$1);
var G__28429 = null;
var G__28430 = 0;
var G__28431 = 0;
seq__28407_28411 = G__28428;
chunk__28408_28412 = G__28429;
count__28409_28413 = G__28430;
i__28410_28414 = G__28431;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28432){
var content = cljs.core.first(arglist__28432);
arglist__28432 = cljs.core.next(arglist__28432);
var name = cljs.core.first(arglist__28432);
var value = cljs.core.rest(arglist__28432);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__28437_28441 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28438_28442 = null;var count__28439_28443 = 0;var i__28440_28444 = 0;while(true){
if((i__28440_28444 < count__28439_28443))
{var n_28445 = cljs.core._nth.call(null,chunk__28438_28442,i__28440_28444);n_28445.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28446 = seq__28437_28441;
var G__28447 = chunk__28438_28442;
var G__28448 = count__28439_28443;
var G__28449 = (i__28440_28444 + 1);
seq__28437_28441 = G__28446;
chunk__28438_28442 = G__28447;
count__28439_28443 = G__28448;
i__28440_28444 = G__28449;
continue;
}
} else
{var temp__4092__auto___28450 = cljs.core.seq.call(null,seq__28437_28441);if(temp__4092__auto___28450)
{var seq__28437_28451__$1 = temp__4092__auto___28450;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28437_28451__$1))
{var c__4189__auto___28452 = cljs.core.chunk_first.call(null,seq__28437_28451__$1);{
var G__28453 = cljs.core.chunk_rest.call(null,seq__28437_28451__$1);
var G__28454 = c__4189__auto___28452;
var G__28455 = cljs.core.count.call(null,c__4189__auto___28452);
var G__28456 = 0;
seq__28437_28441 = G__28453;
chunk__28438_28442 = G__28454;
count__28439_28443 = G__28455;
i__28440_28444 = G__28456;
continue;
}
} else
{var n_28457 = cljs.core.first.call(null,seq__28437_28451__$1);n_28457.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28458 = cljs.core.next.call(null,seq__28437_28451__$1);
var G__28459 = null;
var G__28460 = 0;
var G__28461 = 0;
seq__28437_28441 = G__28458;
chunk__28438_28442 = G__28459;
count__28439_28443 = G__28460;
i__28440_28444 = G__28461;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28462){
var content = cljs.core.first(arglist__28462);
arglist__28462 = cljs.core.next(arglist__28462);
var name = cljs.core.first(arglist__28462);
var value = cljs.core.rest(arglist__28462);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28467_28471 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28468_28472 = null;var count__28469_28473 = 0;var i__28470_28474 = 0;while(true){
if((i__28470_28474 < count__28469_28473))
{var n_28475 = cljs.core._nth.call(null,chunk__28468_28472,i__28470_28474);n_28475.removeAttribute(cljs.core.name.call(null,name));
{
var G__28476 = seq__28467_28471;
var G__28477 = chunk__28468_28472;
var G__28478 = count__28469_28473;
var G__28479 = (i__28470_28474 + 1);
seq__28467_28471 = G__28476;
chunk__28468_28472 = G__28477;
count__28469_28473 = G__28478;
i__28470_28474 = G__28479;
continue;
}
} else
{var temp__4092__auto___28480 = cljs.core.seq.call(null,seq__28467_28471);if(temp__4092__auto___28480)
{var seq__28467_28481__$1 = temp__4092__auto___28480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28467_28481__$1))
{var c__4189__auto___28482 = cljs.core.chunk_first.call(null,seq__28467_28481__$1);{
var G__28483 = cljs.core.chunk_rest.call(null,seq__28467_28481__$1);
var G__28484 = c__4189__auto___28482;
var G__28485 = cljs.core.count.call(null,c__4189__auto___28482);
var G__28486 = 0;
seq__28467_28471 = G__28483;
chunk__28468_28472 = G__28484;
count__28469_28473 = G__28485;
i__28470_28474 = G__28486;
continue;
}
} else
{var n_28487 = cljs.core.first.call(null,seq__28467_28481__$1);n_28487.removeAttribute(cljs.core.name.call(null,name));
{
var G__28488 = cljs.core.next.call(null,seq__28467_28481__$1);
var G__28489 = null;
var G__28490 = 0;
var G__28491 = 0;
seq__28467_28471 = G__28488;
chunk__28468_28472 = G__28489;
count__28469_28473 = G__28490;
i__28470_28474 = G__28491;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28493 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28493,0,null);var v = cljs.core.nth.call(null,vec__28493,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__28494_SHARP_){var attr = attrs__$1.item(p1__28494_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28501_28507 = cljs.core.seq.call(null,styles);var chunk__28502_28508 = null;var count__28503_28509 = 0;var i__28504_28510 = 0;while(true){
if((i__28504_28510 < count__28503_28509))
{var vec__28505_28511 = cljs.core._nth.call(null,chunk__28502_28508,i__28504_28510);var name_28512 = cljs.core.nth.call(null,vec__28505_28511,0,null);var value_28513 = cljs.core.nth.call(null,vec__28505_28511,1,null);domina.set_style_BANG_.call(null,content,name_28512,value_28513);
{
var G__28514 = seq__28501_28507;
var G__28515 = chunk__28502_28508;
var G__28516 = count__28503_28509;
var G__28517 = (i__28504_28510 + 1);
seq__28501_28507 = G__28514;
chunk__28502_28508 = G__28515;
count__28503_28509 = G__28516;
i__28504_28510 = G__28517;
continue;
}
} else
{var temp__4092__auto___28518 = cljs.core.seq.call(null,seq__28501_28507);if(temp__4092__auto___28518)
{var seq__28501_28519__$1 = temp__4092__auto___28518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28501_28519__$1))
{var c__4189__auto___28520 = cljs.core.chunk_first.call(null,seq__28501_28519__$1);{
var G__28521 = cljs.core.chunk_rest.call(null,seq__28501_28519__$1);
var G__28522 = c__4189__auto___28520;
var G__28523 = cljs.core.count.call(null,c__4189__auto___28520);
var G__28524 = 0;
seq__28501_28507 = G__28521;
chunk__28502_28508 = G__28522;
count__28503_28509 = G__28523;
i__28504_28510 = G__28524;
continue;
}
} else
{var vec__28506_28525 = cljs.core.first.call(null,seq__28501_28519__$1);var name_28526 = cljs.core.nth.call(null,vec__28506_28525,0,null);var value_28527 = cljs.core.nth.call(null,vec__28506_28525,1,null);domina.set_style_BANG_.call(null,content,name_28526,value_28527);
{
var G__28528 = cljs.core.next.call(null,seq__28501_28519__$1);
var G__28529 = null;
var G__28530 = 0;
var G__28531 = 0;
seq__28501_28507 = G__28528;
chunk__28502_28508 = G__28529;
count__28503_28509 = G__28530;
i__28504_28510 = G__28531;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28538_28544 = cljs.core.seq.call(null,attrs);var chunk__28539_28545 = null;var count__28540_28546 = 0;var i__28541_28547 = 0;while(true){
if((i__28541_28547 < count__28540_28546))
{var vec__28542_28548 = cljs.core._nth.call(null,chunk__28539_28545,i__28541_28547);var name_28549 = cljs.core.nth.call(null,vec__28542_28548,0,null);var value_28550 = cljs.core.nth.call(null,vec__28542_28548,1,null);domina.set_attr_BANG_.call(null,content,name_28549,value_28550);
{
var G__28551 = seq__28538_28544;
var G__28552 = chunk__28539_28545;
var G__28553 = count__28540_28546;
var G__28554 = (i__28541_28547 + 1);
seq__28538_28544 = G__28551;
chunk__28539_28545 = G__28552;
count__28540_28546 = G__28553;
i__28541_28547 = G__28554;
continue;
}
} else
{var temp__4092__auto___28555 = cljs.core.seq.call(null,seq__28538_28544);if(temp__4092__auto___28555)
{var seq__28538_28556__$1 = temp__4092__auto___28555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28538_28556__$1))
{var c__4189__auto___28557 = cljs.core.chunk_first.call(null,seq__28538_28556__$1);{
var G__28558 = cljs.core.chunk_rest.call(null,seq__28538_28556__$1);
var G__28559 = c__4189__auto___28557;
var G__28560 = cljs.core.count.call(null,c__4189__auto___28557);
var G__28561 = 0;
seq__28538_28544 = G__28558;
chunk__28539_28545 = G__28559;
count__28540_28546 = G__28560;
i__28541_28547 = G__28561;
continue;
}
} else
{var vec__28543_28562 = cljs.core.first.call(null,seq__28538_28556__$1);var name_28563 = cljs.core.nth.call(null,vec__28543_28562,0,null);var value_28564 = cljs.core.nth.call(null,vec__28543_28562,1,null);domina.set_attr_BANG_.call(null,content,name_28563,value_28564);
{
var G__28565 = cljs.core.next.call(null,seq__28538_28556__$1);
var G__28566 = null;
var G__28567 = 0;
var G__28568 = 0;
seq__28538_28544 = G__28565;
chunk__28539_28545 = G__28566;
count__28540_28546 = G__28567;
i__28541_28547 = G__28568;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28573_28577 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28574_28578 = null;var count__28575_28579 = 0;var i__28576_28580 = 0;while(true){
if((i__28576_28580 < count__28575_28579))
{var node_28581 = cljs.core._nth.call(null,chunk__28574_28578,i__28576_28580);goog.dom.classes.add(node_28581,class$);
{
var G__28582 = seq__28573_28577;
var G__28583 = chunk__28574_28578;
var G__28584 = count__28575_28579;
var G__28585 = (i__28576_28580 + 1);
seq__28573_28577 = G__28582;
chunk__28574_28578 = G__28583;
count__28575_28579 = G__28584;
i__28576_28580 = G__28585;
continue;
}
} else
{var temp__4092__auto___28586 = cljs.core.seq.call(null,seq__28573_28577);if(temp__4092__auto___28586)
{var seq__28573_28587__$1 = temp__4092__auto___28586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28573_28587__$1))
{var c__4189__auto___28588 = cljs.core.chunk_first.call(null,seq__28573_28587__$1);{
var G__28589 = cljs.core.chunk_rest.call(null,seq__28573_28587__$1);
var G__28590 = c__4189__auto___28588;
var G__28591 = cljs.core.count.call(null,c__4189__auto___28588);
var G__28592 = 0;
seq__28573_28577 = G__28589;
chunk__28574_28578 = G__28590;
count__28575_28579 = G__28591;
i__28576_28580 = G__28592;
continue;
}
} else
{var node_28593 = cljs.core.first.call(null,seq__28573_28587__$1);goog.dom.classes.add(node_28593,class$);
{
var G__28594 = cljs.core.next.call(null,seq__28573_28587__$1);
var G__28595 = null;
var G__28596 = 0;
var G__28597 = 0;
seq__28573_28577 = G__28594;
chunk__28574_28578 = G__28595;
count__28575_28579 = G__28596;
i__28576_28580 = G__28597;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28602_28606 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28603_28607 = null;var count__28604_28608 = 0;var i__28605_28609 = 0;while(true){
if((i__28605_28609 < count__28604_28608))
{var node_28610 = cljs.core._nth.call(null,chunk__28603_28607,i__28605_28609);goog.dom.classes.remove(node_28610,class$);
{
var G__28611 = seq__28602_28606;
var G__28612 = chunk__28603_28607;
var G__28613 = count__28604_28608;
var G__28614 = (i__28605_28609 + 1);
seq__28602_28606 = G__28611;
chunk__28603_28607 = G__28612;
count__28604_28608 = G__28613;
i__28605_28609 = G__28614;
continue;
}
} else
{var temp__4092__auto___28615 = cljs.core.seq.call(null,seq__28602_28606);if(temp__4092__auto___28615)
{var seq__28602_28616__$1 = temp__4092__auto___28615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28602_28616__$1))
{var c__4189__auto___28617 = cljs.core.chunk_first.call(null,seq__28602_28616__$1);{
var G__28618 = cljs.core.chunk_rest.call(null,seq__28602_28616__$1);
var G__28619 = c__4189__auto___28617;
var G__28620 = cljs.core.count.call(null,c__4189__auto___28617);
var G__28621 = 0;
seq__28602_28606 = G__28618;
chunk__28603_28607 = G__28619;
count__28604_28608 = G__28620;
i__28605_28609 = G__28621;
continue;
}
} else
{var node_28622 = cljs.core.first.call(null,seq__28602_28616__$1);goog.dom.classes.remove(node_28622,class$);
{
var G__28623 = cljs.core.next.call(null,seq__28602_28616__$1);
var G__28624 = null;
var G__28625 = 0;
var G__28626 = 0;
seq__28602_28606 = G__28623;
chunk__28603_28607 = G__28624;
count__28604_28608 = G__28625;
i__28605_28609 = G__28626;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28631_28635 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28632_28636 = null;var count__28633_28637 = 0;var i__28634_28638 = 0;while(true){
if((i__28634_28638 < count__28633_28637))
{var node_28639 = cljs.core._nth.call(null,chunk__28632_28636,i__28634_28638);goog.dom.classes.toggle(node_28639,class$);
{
var G__28640 = seq__28631_28635;
var G__28641 = chunk__28632_28636;
var G__28642 = count__28633_28637;
var G__28643 = (i__28634_28638 + 1);
seq__28631_28635 = G__28640;
chunk__28632_28636 = G__28641;
count__28633_28637 = G__28642;
i__28634_28638 = G__28643;
continue;
}
} else
{var temp__4092__auto___28644 = cljs.core.seq.call(null,seq__28631_28635);if(temp__4092__auto___28644)
{var seq__28631_28645__$1 = temp__4092__auto___28644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28631_28645__$1))
{var c__4189__auto___28646 = cljs.core.chunk_first.call(null,seq__28631_28645__$1);{
var G__28647 = cljs.core.chunk_rest.call(null,seq__28631_28645__$1);
var G__28648 = c__4189__auto___28646;
var G__28649 = cljs.core.count.call(null,c__4189__auto___28646);
var G__28650 = 0;
seq__28631_28635 = G__28647;
chunk__28632_28636 = G__28648;
count__28633_28637 = G__28649;
i__28634_28638 = G__28650;
continue;
}
} else
{var node_28651 = cljs.core.first.call(null,seq__28631_28645__$1);goog.dom.classes.toggle(node_28651,class$);
{
var G__28652 = cljs.core.next.call(null,seq__28631_28645__$1);
var G__28653 = null;
var G__28654 = 0;
var G__28655 = 0;
seq__28631_28635 = G__28652;
chunk__28632_28636 = G__28653;
count__28633_28637 = G__28654;
i__28634_28638 = G__28655;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28664__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28660_28665 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28661_28666 = null;var count__28662_28667 = 0;var i__28663_28668 = 0;while(true){
if((i__28663_28668 < count__28662_28667))
{var node_28669 = cljs.core._nth.call(null,chunk__28661_28666,i__28663_28668);goog.dom.classes.set(node_28669,classes_28664__$1);
{
var G__28670 = seq__28660_28665;
var G__28671 = chunk__28661_28666;
var G__28672 = count__28662_28667;
var G__28673 = (i__28663_28668 + 1);
seq__28660_28665 = G__28670;
chunk__28661_28666 = G__28671;
count__28662_28667 = G__28672;
i__28663_28668 = G__28673;
continue;
}
} else
{var temp__4092__auto___28674 = cljs.core.seq.call(null,seq__28660_28665);if(temp__4092__auto___28674)
{var seq__28660_28675__$1 = temp__4092__auto___28674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28660_28675__$1))
{var c__4189__auto___28676 = cljs.core.chunk_first.call(null,seq__28660_28675__$1);{
var G__28677 = cljs.core.chunk_rest.call(null,seq__28660_28675__$1);
var G__28678 = c__4189__auto___28676;
var G__28679 = cljs.core.count.call(null,c__4189__auto___28676);
var G__28680 = 0;
seq__28660_28665 = G__28677;
chunk__28661_28666 = G__28678;
count__28662_28667 = G__28679;
i__28663_28668 = G__28680;
continue;
}
} else
{var node_28681 = cljs.core.first.call(null,seq__28660_28675__$1);goog.dom.classes.set(node_28681,classes_28664__$1);
{
var G__28682 = cljs.core.next.call(null,seq__28660_28675__$1);
var G__28683 = null;
var G__28684 = 0;
var G__28685 = 0;
seq__28660_28665 = G__28682;
chunk__28661_28666 = G__28683;
count__28662_28667 = G__28684;
i__28663_28668 = G__28685;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28690_28694 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28691_28695 = null;var count__28692_28696 = 0;var i__28693_28697 = 0;while(true){
if((i__28693_28697 < count__28692_28696))
{var node_28698 = cljs.core._nth.call(null,chunk__28691_28695,i__28693_28697);goog.dom.setTextContent(node_28698,value);
{
var G__28699 = seq__28690_28694;
var G__28700 = chunk__28691_28695;
var G__28701 = count__28692_28696;
var G__28702 = (i__28693_28697 + 1);
seq__28690_28694 = G__28699;
chunk__28691_28695 = G__28700;
count__28692_28696 = G__28701;
i__28693_28697 = G__28702;
continue;
}
} else
{var temp__4092__auto___28703 = cljs.core.seq.call(null,seq__28690_28694);if(temp__4092__auto___28703)
{var seq__28690_28704__$1 = temp__4092__auto___28703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28690_28704__$1))
{var c__4189__auto___28705 = cljs.core.chunk_first.call(null,seq__28690_28704__$1);{
var G__28706 = cljs.core.chunk_rest.call(null,seq__28690_28704__$1);
var G__28707 = c__4189__auto___28705;
var G__28708 = cljs.core.count.call(null,c__4189__auto___28705);
var G__28709 = 0;
seq__28690_28694 = G__28706;
chunk__28691_28695 = G__28707;
count__28692_28696 = G__28708;
i__28693_28697 = G__28709;
continue;
}
} else
{var node_28710 = cljs.core.first.call(null,seq__28690_28704__$1);goog.dom.setTextContent(node_28710,value);
{
var G__28711 = cljs.core.next.call(null,seq__28690_28704__$1);
var G__28712 = null;
var G__28713 = 0;
var G__28714 = 0;
seq__28690_28694 = G__28711;
chunk__28691_28695 = G__28712;
count__28692_28696 = G__28713;
i__28693_28697 = G__28714;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28719_28723 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28720_28724 = null;var count__28721_28725 = 0;var i__28722_28726 = 0;while(true){
if((i__28722_28726 < count__28721_28725))
{var node_28727 = cljs.core._nth.call(null,chunk__28720_28724,i__28722_28726);goog.dom.forms.setValue(node_28727,value);
{
var G__28728 = seq__28719_28723;
var G__28729 = chunk__28720_28724;
var G__28730 = count__28721_28725;
var G__28731 = (i__28722_28726 + 1);
seq__28719_28723 = G__28728;
chunk__28720_28724 = G__28729;
count__28721_28725 = G__28730;
i__28722_28726 = G__28731;
continue;
}
} else
{var temp__4092__auto___28732 = cljs.core.seq.call(null,seq__28719_28723);if(temp__4092__auto___28732)
{var seq__28719_28733__$1 = temp__4092__auto___28732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28719_28733__$1))
{var c__4189__auto___28734 = cljs.core.chunk_first.call(null,seq__28719_28733__$1);{
var G__28735 = cljs.core.chunk_rest.call(null,seq__28719_28733__$1);
var G__28736 = c__4189__auto___28734;
var G__28737 = cljs.core.count.call(null,c__4189__auto___28734);
var G__28738 = 0;
seq__28719_28723 = G__28735;
chunk__28720_28724 = G__28736;
count__28721_28725 = G__28737;
i__28722_28726 = G__28738;
continue;
}
} else
{var node_28739 = cljs.core.first.call(null,seq__28719_28733__$1);goog.dom.forms.setValue(node_28739,value);
{
var G__28740 = cljs.core.next.call(null,seq__28719_28733__$1);
var G__28741 = null;
var G__28742 = 0;
var G__28743 = 0;
seq__28719_28723 = G__28740;
chunk__28720_28724 = G__28741;
count__28721_28725 = G__28742;
i__28722_28726 = G__28743;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_28754 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28750_28755 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28751_28756 = null;var count__28752_28757 = 0;var i__28753_28758 = 0;while(true){
if((i__28753_28758 < count__28752_28757))
{var node_28759 = cljs.core._nth.call(null,chunk__28751_28756,i__28753_28758);node_28759.innerHTML = value_28754;
{
var G__28760 = seq__28750_28755;
var G__28761 = chunk__28751_28756;
var G__28762 = count__28752_28757;
var G__28763 = (i__28753_28758 + 1);
seq__28750_28755 = G__28760;
chunk__28751_28756 = G__28761;
count__28752_28757 = G__28762;
i__28753_28758 = G__28763;
continue;
}
} else
{var temp__4092__auto___28764 = cljs.core.seq.call(null,seq__28750_28755);if(temp__4092__auto___28764)
{var seq__28750_28765__$1 = temp__4092__auto___28764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28750_28765__$1))
{var c__4189__auto___28766 = cljs.core.chunk_first.call(null,seq__28750_28765__$1);{
var G__28767 = cljs.core.chunk_rest.call(null,seq__28750_28765__$1);
var G__28768 = c__4189__auto___28766;
var G__28769 = cljs.core.count.call(null,c__4189__auto___28766);
var G__28770 = 0;
seq__28750_28755 = G__28767;
chunk__28751_28756 = G__28768;
count__28752_28757 = G__28769;
i__28753_28758 = G__28770;
continue;
}
} else
{var node_28771 = cljs.core.first.call(null,seq__28750_28765__$1);node_28771.innerHTML = value_28754;
{
var G__28772 = cljs.core.next.call(null,seq__28750_28765__$1);
var G__28773 = null;
var G__28774 = 0;
var G__28775 = 0;
seq__28750_28755 = G__28772;
chunk__28751_28756 = G__28773;
count__28752_28757 = G__28774;
i__28753_28758 = G__28775;
continue;
}
}
} else
{}
}
break;
}
}catch (e28749){if((e28749 instanceof Error))
{var e_28776 = e28749;domina.replace_children_BANG_.call(null,content,value_28754);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28749;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28783_28787 = cljs.core.seq.call(null,children);var chunk__28784_28788 = null;var count__28785_28789 = 0;var i__28786_28790 = 0;while(true){
if((i__28786_28790 < count__28785_28789))
{var child_28791 = cljs.core._nth.call(null,chunk__28784_28788,i__28786_28790);frag.appendChild(child_28791);
{
var G__28792 = seq__28783_28787;
var G__28793 = chunk__28784_28788;
var G__28794 = count__28785_28789;
var G__28795 = (i__28786_28790 + 1);
seq__28783_28787 = G__28792;
chunk__28784_28788 = G__28793;
count__28785_28789 = G__28794;
i__28786_28790 = G__28795;
continue;
}
} else
{var temp__4092__auto___28796 = cljs.core.seq.call(null,seq__28783_28787);if(temp__4092__auto___28796)
{var seq__28783_28797__$1 = temp__4092__auto___28796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28783_28797__$1))
{var c__4189__auto___28798 = cljs.core.chunk_first.call(null,seq__28783_28797__$1);{
var G__28799 = cljs.core.chunk_rest.call(null,seq__28783_28797__$1);
var G__28800 = c__4189__auto___28798;
var G__28801 = cljs.core.count.call(null,c__4189__auto___28798);
var G__28802 = 0;
seq__28783_28787 = G__28799;
chunk__28784_28788 = G__28800;
count__28785_28789 = G__28801;
i__28786_28790 = G__28802;
continue;
}
} else
{var child_28803 = cljs.core.first.call(null,seq__28783_28797__$1);frag.appendChild(child_28803);
{
var G__28804 = cljs.core.next.call(null,seq__28783_28797__$1);
var G__28805 = null;
var G__28806 = 0;
var G__28807 = 0;
seq__28783_28787 = G__28804;
chunk__28784_28788 = G__28805;
count__28785_28789 = G__28806;
i__28786_28790 = G__28807;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__28777_SHARP_,p2__28778_SHARP_){return f.call(null,p1__28777_SHARP_,p2__28778_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__28809 = list_thing;if(G__28809)
{var bit__4091__auto__ = (G__28809.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28809.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28809.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28809);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28809);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__28810 = content;if(G__28810)
{var bit__4091__auto__ = (G__28810.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28810.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28810.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28810);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28810);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__28811 = content;if(G__28811)
{var bit__4091__auto__ = (G__28811.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28811.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28811.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28811);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28811);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map
// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_24358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_24359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_24360 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_24360,opt_wrapper_24358,table_section_wrapper_24359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_24358,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_24359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_24359,cell_wrapper_24360,table_section_wrapper_24359,table_section_wrapper_24359]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__24365 = cljs.core.seq.call(null,tbody);var chunk__24366 = null;var count__24367 = (0);var i__24368 = (0);while(true){
if((i__24368 < count__24367))
{var child = cljs.core._nth.call(null,chunk__24366,i__24368);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24369 = seq__24365;
var G__24370 = chunk__24366;
var G__24371 = count__24367;
var G__24372 = (i__24368 + (1));
seq__24365 = G__24369;
chunk__24366 = G__24370;
count__24367 = G__24371;
i__24368 = G__24372;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24365);if(temp__4126__auto__)
{var seq__24365__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24365__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__24365__$1);{
var G__24373 = cljs.core.chunk_rest.call(null,seq__24365__$1);
var G__24374 = c__4314__auto__;
var G__24375 = cljs.core.count.call(null,c__4314__auto__);
var G__24376 = (0);
seq__24365 = G__24373;
chunk__24366 = G__24374;
count__24367 = G__24375;
i__24368 = G__24376;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__24365__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24377 = cljs.core.next.call(null,seq__24365__$1);
var G__24378 = null;
var G__24379 = (0);
var G__24380 = (0);
seq__24365 = G__24377;
chunk__24366 = G__24378;
count__24367 = G__24379;
i__24368 = G__24380;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__24382 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__24382,(0),null);var start_wrap = cljs.core.nth.call(null,vec__24382,(1),null);var end_wrap = cljs.core.nth.call(null,vec__24382,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__24383 = wrapper.lastChild;
var G__24384 = (level - (1));
wrapper = G__24383;
level = G__24384;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj24386 = {};return obj24386;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__24387){
var mesg = cljs.core.seq(arglist__24387);
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
log.cljs$lang$applyTo = (function (arglist__24388){
var mesg = cljs.core.seq(arglist__24388);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__24389){
var contents = cljs.core.seq(arglist__24389);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__24390_SHARP_){return p1__24390_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__24391_SHARP_,p2__24392_SHARP_){return goog.dom.insertChildAt(p1__24391_SHARP_,p2__24392_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24394_SHARP_,p2__24393_SHARP_){return goog.dom.insertSiblingBefore(p2__24393_SHARP_,p1__24394_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24396_SHARP_,p2__24395_SHARP_){return goog.dom.insertSiblingAfter(p2__24395_SHARP_,p1__24396_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__24398_SHARP_,p2__24397_SHARP_){return goog.dom.replaceNode(p2__24397_SHARP_,p1__24398_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__24403_24407 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24404_24408 = null;var count__24405_24409 = (0);var i__24406_24410 = (0);while(true){
if((i__24406_24410 < count__24405_24409))
{var n_24411 = cljs.core._nth.call(null,chunk__24404_24408,i__24406_24410);goog.style.setStyle(n_24411,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24412 = seq__24403_24407;
var G__24413 = chunk__24404_24408;
var G__24414 = count__24405_24409;
var G__24415 = (i__24406_24410 + (1));
seq__24403_24407 = G__24412;
chunk__24404_24408 = G__24413;
count__24405_24409 = G__24414;
i__24406_24410 = G__24415;
continue;
}
} else
{var temp__4126__auto___24416 = cljs.core.seq.call(null,seq__24403_24407);if(temp__4126__auto___24416)
{var seq__24403_24417__$1 = temp__4126__auto___24416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24403_24417__$1))
{var c__4314__auto___24418 = cljs.core.chunk_first.call(null,seq__24403_24417__$1);{
var G__24419 = cljs.core.chunk_rest.call(null,seq__24403_24417__$1);
var G__24420 = c__4314__auto___24418;
var G__24421 = cljs.core.count.call(null,c__4314__auto___24418);
var G__24422 = (0);
seq__24403_24407 = G__24419;
chunk__24404_24408 = G__24420;
count__24405_24409 = G__24421;
i__24406_24410 = G__24422;
continue;
}
} else
{var n_24423 = cljs.core.first.call(null,seq__24403_24417__$1);goog.style.setStyle(n_24423,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24424 = cljs.core.next.call(null,seq__24403_24417__$1);
var G__24425 = null;
var G__24426 = (0);
var G__24427 = (0);
seq__24403_24407 = G__24424;
chunk__24404_24408 = G__24425;
count__24405_24409 = G__24426;
i__24406_24410 = G__24427;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24428){
var content = cljs.core.first(arglist__24428);
arglist__24428 = cljs.core.next(arglist__24428);
var name = cljs.core.first(arglist__24428);
var value = cljs.core.rest(arglist__24428);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__24433_24437 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24434_24438 = null;var count__24435_24439 = (0);var i__24436_24440 = (0);while(true){
if((i__24436_24440 < count__24435_24439))
{var n_24441 = cljs.core._nth.call(null,chunk__24434_24438,i__24436_24440);n_24441.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24442 = seq__24433_24437;
var G__24443 = chunk__24434_24438;
var G__24444 = count__24435_24439;
var G__24445 = (i__24436_24440 + (1));
seq__24433_24437 = G__24442;
chunk__24434_24438 = G__24443;
count__24435_24439 = G__24444;
i__24436_24440 = G__24445;
continue;
}
} else
{var temp__4126__auto___24446 = cljs.core.seq.call(null,seq__24433_24437);if(temp__4126__auto___24446)
{var seq__24433_24447__$1 = temp__4126__auto___24446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24433_24447__$1))
{var c__4314__auto___24448 = cljs.core.chunk_first.call(null,seq__24433_24447__$1);{
var G__24449 = cljs.core.chunk_rest.call(null,seq__24433_24447__$1);
var G__24450 = c__4314__auto___24448;
var G__24451 = cljs.core.count.call(null,c__4314__auto___24448);
var G__24452 = (0);
seq__24433_24437 = G__24449;
chunk__24434_24438 = G__24450;
count__24435_24439 = G__24451;
i__24436_24440 = G__24452;
continue;
}
} else
{var n_24453 = cljs.core.first.call(null,seq__24433_24447__$1);n_24453.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24454 = cljs.core.next.call(null,seq__24433_24447__$1);
var G__24455 = null;
var G__24456 = (0);
var G__24457 = (0);
seq__24433_24437 = G__24454;
chunk__24434_24438 = G__24455;
count__24435_24439 = G__24456;
i__24436_24440 = G__24457;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24458){
var content = cljs.core.first(arglist__24458);
arglist__24458 = cljs.core.next(arglist__24458);
var name = cljs.core.first(arglist__24458);
var value = cljs.core.rest(arglist__24458);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24463_24467 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24464_24468 = null;var count__24465_24469 = (0);var i__24466_24470 = (0);while(true){
if((i__24466_24470 < count__24465_24469))
{var n_24471 = cljs.core._nth.call(null,chunk__24464_24468,i__24466_24470);n_24471.removeAttribute(cljs.core.name.call(null,name));
{
var G__24472 = seq__24463_24467;
var G__24473 = chunk__24464_24468;
var G__24474 = count__24465_24469;
var G__24475 = (i__24466_24470 + (1));
seq__24463_24467 = G__24472;
chunk__24464_24468 = G__24473;
count__24465_24469 = G__24474;
i__24466_24470 = G__24475;
continue;
}
} else
{var temp__4126__auto___24476 = cljs.core.seq.call(null,seq__24463_24467);if(temp__4126__auto___24476)
{var seq__24463_24477__$1 = temp__4126__auto___24476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24463_24477__$1))
{var c__4314__auto___24478 = cljs.core.chunk_first.call(null,seq__24463_24477__$1);{
var G__24479 = cljs.core.chunk_rest.call(null,seq__24463_24477__$1);
var G__24480 = c__4314__auto___24478;
var G__24481 = cljs.core.count.call(null,c__4314__auto___24478);
var G__24482 = (0);
seq__24463_24467 = G__24479;
chunk__24464_24468 = G__24480;
count__24465_24469 = G__24481;
i__24466_24470 = G__24482;
continue;
}
} else
{var n_24483 = cljs.core.first.call(null,seq__24463_24477__$1);n_24483.removeAttribute(cljs.core.name.call(null,name));
{
var G__24484 = cljs.core.next.call(null,seq__24463_24477__$1);
var G__24485 = null;
var G__24486 = (0);
var G__24487 = (0);
seq__24463_24467 = G__24484;
chunk__24464_24468 = G__24485;
count__24465_24469 = G__24486;
i__24466_24470 = G__24487;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__24489 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__24489,(0),null);var v = cljs.core.nth.call(null,vec__24489,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__24490_SHARP_){var attr = attrs__$1.item(p1__24490_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24497_24503 = cljs.core.seq.call(null,styles);var chunk__24498_24504 = null;var count__24499_24505 = (0);var i__24500_24506 = (0);while(true){
if((i__24500_24506 < count__24499_24505))
{var vec__24501_24507 = cljs.core._nth.call(null,chunk__24498_24504,i__24500_24506);var name_24508 = cljs.core.nth.call(null,vec__24501_24507,(0),null);var value_24509 = cljs.core.nth.call(null,vec__24501_24507,(1),null);domina.set_style_BANG_.call(null,content,name_24508,value_24509);
{
var G__24510 = seq__24497_24503;
var G__24511 = chunk__24498_24504;
var G__24512 = count__24499_24505;
var G__24513 = (i__24500_24506 + (1));
seq__24497_24503 = G__24510;
chunk__24498_24504 = G__24511;
count__24499_24505 = G__24512;
i__24500_24506 = G__24513;
continue;
}
} else
{var temp__4126__auto___24514 = cljs.core.seq.call(null,seq__24497_24503);if(temp__4126__auto___24514)
{var seq__24497_24515__$1 = temp__4126__auto___24514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24497_24515__$1))
{var c__4314__auto___24516 = cljs.core.chunk_first.call(null,seq__24497_24515__$1);{
var G__24517 = cljs.core.chunk_rest.call(null,seq__24497_24515__$1);
var G__24518 = c__4314__auto___24516;
var G__24519 = cljs.core.count.call(null,c__4314__auto___24516);
var G__24520 = (0);
seq__24497_24503 = G__24517;
chunk__24498_24504 = G__24518;
count__24499_24505 = G__24519;
i__24500_24506 = G__24520;
continue;
}
} else
{var vec__24502_24521 = cljs.core.first.call(null,seq__24497_24515__$1);var name_24522 = cljs.core.nth.call(null,vec__24502_24521,(0),null);var value_24523 = cljs.core.nth.call(null,vec__24502_24521,(1),null);domina.set_style_BANG_.call(null,content,name_24522,value_24523);
{
var G__24524 = cljs.core.next.call(null,seq__24497_24515__$1);
var G__24525 = null;
var G__24526 = (0);
var G__24527 = (0);
seq__24497_24503 = G__24524;
chunk__24498_24504 = G__24525;
count__24499_24505 = G__24526;
i__24500_24506 = G__24527;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24534_24540 = cljs.core.seq.call(null,attrs);var chunk__24535_24541 = null;var count__24536_24542 = (0);var i__24537_24543 = (0);while(true){
if((i__24537_24543 < count__24536_24542))
{var vec__24538_24544 = cljs.core._nth.call(null,chunk__24535_24541,i__24537_24543);var name_24545 = cljs.core.nth.call(null,vec__24538_24544,(0),null);var value_24546 = cljs.core.nth.call(null,vec__24538_24544,(1),null);domina.set_attr_BANG_.call(null,content,name_24545,value_24546);
{
var G__24547 = seq__24534_24540;
var G__24548 = chunk__24535_24541;
var G__24549 = count__24536_24542;
var G__24550 = (i__24537_24543 + (1));
seq__24534_24540 = G__24547;
chunk__24535_24541 = G__24548;
count__24536_24542 = G__24549;
i__24537_24543 = G__24550;
continue;
}
} else
{var temp__4126__auto___24551 = cljs.core.seq.call(null,seq__24534_24540);if(temp__4126__auto___24551)
{var seq__24534_24552__$1 = temp__4126__auto___24551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24534_24552__$1))
{var c__4314__auto___24553 = cljs.core.chunk_first.call(null,seq__24534_24552__$1);{
var G__24554 = cljs.core.chunk_rest.call(null,seq__24534_24552__$1);
var G__24555 = c__4314__auto___24553;
var G__24556 = cljs.core.count.call(null,c__4314__auto___24553);
var G__24557 = (0);
seq__24534_24540 = G__24554;
chunk__24535_24541 = G__24555;
count__24536_24542 = G__24556;
i__24537_24543 = G__24557;
continue;
}
} else
{var vec__24539_24558 = cljs.core.first.call(null,seq__24534_24552__$1);var name_24559 = cljs.core.nth.call(null,vec__24539_24558,(0),null);var value_24560 = cljs.core.nth.call(null,vec__24539_24558,(1),null);domina.set_attr_BANG_.call(null,content,name_24559,value_24560);
{
var G__24561 = cljs.core.next.call(null,seq__24534_24552__$1);
var G__24562 = null;
var G__24563 = (0);
var G__24564 = (0);
seq__24534_24540 = G__24561;
chunk__24535_24541 = G__24562;
count__24536_24542 = G__24563;
i__24537_24543 = G__24564;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24569_24573 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24570_24574 = null;var count__24571_24575 = (0);var i__24572_24576 = (0);while(true){
if((i__24572_24576 < count__24571_24575))
{var node_24577 = cljs.core._nth.call(null,chunk__24570_24574,i__24572_24576);goog.dom.classes.add(node_24577,class$);
{
var G__24578 = seq__24569_24573;
var G__24579 = chunk__24570_24574;
var G__24580 = count__24571_24575;
var G__24581 = (i__24572_24576 + (1));
seq__24569_24573 = G__24578;
chunk__24570_24574 = G__24579;
count__24571_24575 = G__24580;
i__24572_24576 = G__24581;
continue;
}
} else
{var temp__4126__auto___24582 = cljs.core.seq.call(null,seq__24569_24573);if(temp__4126__auto___24582)
{var seq__24569_24583__$1 = temp__4126__auto___24582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24569_24583__$1))
{var c__4314__auto___24584 = cljs.core.chunk_first.call(null,seq__24569_24583__$1);{
var G__24585 = cljs.core.chunk_rest.call(null,seq__24569_24583__$1);
var G__24586 = c__4314__auto___24584;
var G__24587 = cljs.core.count.call(null,c__4314__auto___24584);
var G__24588 = (0);
seq__24569_24573 = G__24585;
chunk__24570_24574 = G__24586;
count__24571_24575 = G__24587;
i__24572_24576 = G__24588;
continue;
}
} else
{var node_24589 = cljs.core.first.call(null,seq__24569_24583__$1);goog.dom.classes.add(node_24589,class$);
{
var G__24590 = cljs.core.next.call(null,seq__24569_24583__$1);
var G__24591 = null;
var G__24592 = (0);
var G__24593 = (0);
seq__24569_24573 = G__24590;
chunk__24570_24574 = G__24591;
count__24571_24575 = G__24592;
i__24572_24576 = G__24593;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24598_24602 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24599_24603 = null;var count__24600_24604 = (0);var i__24601_24605 = (0);while(true){
if((i__24601_24605 < count__24600_24604))
{var node_24606 = cljs.core._nth.call(null,chunk__24599_24603,i__24601_24605);goog.dom.classes.remove(node_24606,class$);
{
var G__24607 = seq__24598_24602;
var G__24608 = chunk__24599_24603;
var G__24609 = count__24600_24604;
var G__24610 = (i__24601_24605 + (1));
seq__24598_24602 = G__24607;
chunk__24599_24603 = G__24608;
count__24600_24604 = G__24609;
i__24601_24605 = G__24610;
continue;
}
} else
{var temp__4126__auto___24611 = cljs.core.seq.call(null,seq__24598_24602);if(temp__4126__auto___24611)
{var seq__24598_24612__$1 = temp__4126__auto___24611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24598_24612__$1))
{var c__4314__auto___24613 = cljs.core.chunk_first.call(null,seq__24598_24612__$1);{
var G__24614 = cljs.core.chunk_rest.call(null,seq__24598_24612__$1);
var G__24615 = c__4314__auto___24613;
var G__24616 = cljs.core.count.call(null,c__4314__auto___24613);
var G__24617 = (0);
seq__24598_24602 = G__24614;
chunk__24599_24603 = G__24615;
count__24600_24604 = G__24616;
i__24601_24605 = G__24617;
continue;
}
} else
{var node_24618 = cljs.core.first.call(null,seq__24598_24612__$1);goog.dom.classes.remove(node_24618,class$);
{
var G__24619 = cljs.core.next.call(null,seq__24598_24612__$1);
var G__24620 = null;
var G__24621 = (0);
var G__24622 = (0);
seq__24598_24602 = G__24619;
chunk__24599_24603 = G__24620;
count__24600_24604 = G__24621;
i__24601_24605 = G__24622;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24627_24631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24628_24632 = null;var count__24629_24633 = (0);var i__24630_24634 = (0);while(true){
if((i__24630_24634 < count__24629_24633))
{var node_24635 = cljs.core._nth.call(null,chunk__24628_24632,i__24630_24634);goog.dom.classes.toggle(node_24635,class$);
{
var G__24636 = seq__24627_24631;
var G__24637 = chunk__24628_24632;
var G__24638 = count__24629_24633;
var G__24639 = (i__24630_24634 + (1));
seq__24627_24631 = G__24636;
chunk__24628_24632 = G__24637;
count__24629_24633 = G__24638;
i__24630_24634 = G__24639;
continue;
}
} else
{var temp__4126__auto___24640 = cljs.core.seq.call(null,seq__24627_24631);if(temp__4126__auto___24640)
{var seq__24627_24641__$1 = temp__4126__auto___24640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24627_24641__$1))
{var c__4314__auto___24642 = cljs.core.chunk_first.call(null,seq__24627_24641__$1);{
var G__24643 = cljs.core.chunk_rest.call(null,seq__24627_24641__$1);
var G__24644 = c__4314__auto___24642;
var G__24645 = cljs.core.count.call(null,c__4314__auto___24642);
var G__24646 = (0);
seq__24627_24631 = G__24643;
chunk__24628_24632 = G__24644;
count__24629_24633 = G__24645;
i__24630_24634 = G__24646;
continue;
}
} else
{var node_24647 = cljs.core.first.call(null,seq__24627_24641__$1);goog.dom.classes.toggle(node_24647,class$);
{
var G__24648 = cljs.core.next.call(null,seq__24627_24641__$1);
var G__24649 = null;
var G__24650 = (0);
var G__24651 = (0);
seq__24627_24631 = G__24648;
chunk__24628_24632 = G__24649;
count__24629_24633 = G__24650;
i__24630_24634 = G__24651;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24660__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__24656_24661 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24657_24662 = null;var count__24658_24663 = (0);var i__24659_24664 = (0);while(true){
if((i__24659_24664 < count__24658_24663))
{var node_24665 = cljs.core._nth.call(null,chunk__24657_24662,i__24659_24664);goog.dom.classes.set(node_24665,classes_24660__$1);
{
var G__24666 = seq__24656_24661;
var G__24667 = chunk__24657_24662;
var G__24668 = count__24658_24663;
var G__24669 = (i__24659_24664 + (1));
seq__24656_24661 = G__24666;
chunk__24657_24662 = G__24667;
count__24658_24663 = G__24668;
i__24659_24664 = G__24669;
continue;
}
} else
{var temp__4126__auto___24670 = cljs.core.seq.call(null,seq__24656_24661);if(temp__4126__auto___24670)
{var seq__24656_24671__$1 = temp__4126__auto___24670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24656_24671__$1))
{var c__4314__auto___24672 = cljs.core.chunk_first.call(null,seq__24656_24671__$1);{
var G__24673 = cljs.core.chunk_rest.call(null,seq__24656_24671__$1);
var G__24674 = c__4314__auto___24672;
var G__24675 = cljs.core.count.call(null,c__4314__auto___24672);
var G__24676 = (0);
seq__24656_24661 = G__24673;
chunk__24657_24662 = G__24674;
count__24658_24663 = G__24675;
i__24659_24664 = G__24676;
continue;
}
} else
{var node_24677 = cljs.core.first.call(null,seq__24656_24671__$1);goog.dom.classes.set(node_24677,classes_24660__$1);
{
var G__24678 = cljs.core.next.call(null,seq__24656_24671__$1);
var G__24679 = null;
var G__24680 = (0);
var G__24681 = (0);
seq__24656_24661 = G__24678;
chunk__24657_24662 = G__24679;
count__24658_24663 = G__24680;
i__24659_24664 = G__24681;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24686_24690 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24687_24691 = null;var count__24688_24692 = (0);var i__24689_24693 = (0);while(true){
if((i__24689_24693 < count__24688_24692))
{var node_24694 = cljs.core._nth.call(null,chunk__24687_24691,i__24689_24693);goog.dom.setTextContent(node_24694,value);
{
var G__24695 = seq__24686_24690;
var G__24696 = chunk__24687_24691;
var G__24697 = count__24688_24692;
var G__24698 = (i__24689_24693 + (1));
seq__24686_24690 = G__24695;
chunk__24687_24691 = G__24696;
count__24688_24692 = G__24697;
i__24689_24693 = G__24698;
continue;
}
} else
{var temp__4126__auto___24699 = cljs.core.seq.call(null,seq__24686_24690);if(temp__4126__auto___24699)
{var seq__24686_24700__$1 = temp__4126__auto___24699;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24686_24700__$1))
{var c__4314__auto___24701 = cljs.core.chunk_first.call(null,seq__24686_24700__$1);{
var G__24702 = cljs.core.chunk_rest.call(null,seq__24686_24700__$1);
var G__24703 = c__4314__auto___24701;
var G__24704 = cljs.core.count.call(null,c__4314__auto___24701);
var G__24705 = (0);
seq__24686_24690 = G__24702;
chunk__24687_24691 = G__24703;
count__24688_24692 = G__24704;
i__24689_24693 = G__24705;
continue;
}
} else
{var node_24706 = cljs.core.first.call(null,seq__24686_24700__$1);goog.dom.setTextContent(node_24706,value);
{
var G__24707 = cljs.core.next.call(null,seq__24686_24700__$1);
var G__24708 = null;
var G__24709 = (0);
var G__24710 = (0);
seq__24686_24690 = G__24707;
chunk__24687_24691 = G__24708;
count__24688_24692 = G__24709;
i__24689_24693 = G__24710;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24715_24719 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24716_24720 = null;var count__24717_24721 = (0);var i__24718_24722 = (0);while(true){
if((i__24718_24722 < count__24717_24721))
{var node_24723 = cljs.core._nth.call(null,chunk__24716_24720,i__24718_24722);goog.dom.forms.setValue(node_24723,value);
{
var G__24724 = seq__24715_24719;
var G__24725 = chunk__24716_24720;
var G__24726 = count__24717_24721;
var G__24727 = (i__24718_24722 + (1));
seq__24715_24719 = G__24724;
chunk__24716_24720 = G__24725;
count__24717_24721 = G__24726;
i__24718_24722 = G__24727;
continue;
}
} else
{var temp__4126__auto___24728 = cljs.core.seq.call(null,seq__24715_24719);if(temp__4126__auto___24728)
{var seq__24715_24729__$1 = temp__4126__auto___24728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24715_24729__$1))
{var c__4314__auto___24730 = cljs.core.chunk_first.call(null,seq__24715_24729__$1);{
var G__24731 = cljs.core.chunk_rest.call(null,seq__24715_24729__$1);
var G__24732 = c__4314__auto___24730;
var G__24733 = cljs.core.count.call(null,c__4314__auto___24730);
var G__24734 = (0);
seq__24715_24719 = G__24731;
chunk__24716_24720 = G__24732;
count__24717_24721 = G__24733;
i__24718_24722 = G__24734;
continue;
}
} else
{var node_24735 = cljs.core.first.call(null,seq__24715_24729__$1);goog.dom.forms.setValue(node_24735,value);
{
var G__24736 = cljs.core.next.call(null,seq__24715_24729__$1);
var G__24737 = null;
var G__24738 = (0);
var G__24739 = (0);
seq__24715_24719 = G__24736;
chunk__24716_24720 = G__24737;
count__24717_24721 = G__24738;
i__24718_24722 = G__24739;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_24750 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24746_24751 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24747_24752 = null;var count__24748_24753 = (0);var i__24749_24754 = (0);while(true){
if((i__24749_24754 < count__24748_24753))
{var node_24755 = cljs.core._nth.call(null,chunk__24747_24752,i__24749_24754);node_24755.innerHTML = value_24750;
{
var G__24756 = seq__24746_24751;
var G__24757 = chunk__24747_24752;
var G__24758 = count__24748_24753;
var G__24759 = (i__24749_24754 + (1));
seq__24746_24751 = G__24756;
chunk__24747_24752 = G__24757;
count__24748_24753 = G__24758;
i__24749_24754 = G__24759;
continue;
}
} else
{var temp__4126__auto___24760 = cljs.core.seq.call(null,seq__24746_24751);if(temp__4126__auto___24760)
{var seq__24746_24761__$1 = temp__4126__auto___24760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24746_24761__$1))
{var c__4314__auto___24762 = cljs.core.chunk_first.call(null,seq__24746_24761__$1);{
var G__24763 = cljs.core.chunk_rest.call(null,seq__24746_24761__$1);
var G__24764 = c__4314__auto___24762;
var G__24765 = cljs.core.count.call(null,c__4314__auto___24762);
var G__24766 = (0);
seq__24746_24751 = G__24763;
chunk__24747_24752 = G__24764;
count__24748_24753 = G__24765;
i__24749_24754 = G__24766;
continue;
}
} else
{var node_24767 = cljs.core.first.call(null,seq__24746_24761__$1);node_24767.innerHTML = value_24750;
{
var G__24768 = cljs.core.next.call(null,seq__24746_24761__$1);
var G__24769 = null;
var G__24770 = (0);
var G__24771 = (0);
seq__24746_24751 = G__24768;
chunk__24747_24752 = G__24769;
count__24748_24753 = G__24770;
i__24749_24754 = G__24771;
continue;
}
}
} else
{}
}
break;
}
}catch (e24745){if((e24745 instanceof Error))
{var e_24772 = e24745;domina.replace_children_BANG_.call(null,content,value_24750);
} else
{throw e24745;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24779_24783 = cljs.core.seq.call(null,children);var chunk__24780_24784 = null;var count__24781_24785 = (0);var i__24782_24786 = (0);while(true){
if((i__24782_24786 < count__24781_24785))
{var child_24787 = cljs.core._nth.call(null,chunk__24780_24784,i__24782_24786);frag.appendChild(child_24787);
{
var G__24788 = seq__24779_24783;
var G__24789 = chunk__24780_24784;
var G__24790 = count__24781_24785;
var G__24791 = (i__24782_24786 + (1));
seq__24779_24783 = G__24788;
chunk__24780_24784 = G__24789;
count__24781_24785 = G__24790;
i__24782_24786 = G__24791;
continue;
}
} else
{var temp__4126__auto___24792 = cljs.core.seq.call(null,seq__24779_24783);if(temp__4126__auto___24792)
{var seq__24779_24793__$1 = temp__4126__auto___24792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24779_24793__$1))
{var c__4314__auto___24794 = cljs.core.chunk_first.call(null,seq__24779_24793__$1);{
var G__24795 = cljs.core.chunk_rest.call(null,seq__24779_24793__$1);
var G__24796 = c__4314__auto___24794;
var G__24797 = cljs.core.count.call(null,c__4314__auto___24794);
var G__24798 = (0);
seq__24779_24783 = G__24795;
chunk__24780_24784 = G__24796;
count__24781_24785 = G__24797;
i__24782_24786 = G__24798;
continue;
}
} else
{var child_24799 = cljs.core.first.call(null,seq__24779_24793__$1);frag.appendChild(child_24799);
{
var G__24800 = cljs.core.next.call(null,seq__24779_24793__$1);
var G__24801 = null;
var G__24802 = (0);
var G__24803 = (0);
seq__24779_24783 = G__24800;
chunk__24780_24784 = G__24801;
count__24781_24785 = G__24802;
i__24782_24786 = G__24803;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__24773_SHARP_,p2__24774_SHARP_){return f.call(null,p1__24773_SHARP_,p2__24774_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__24805 = list_thing;if(G__24805)
{var bit__4208__auto__ = (G__24805.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24805.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24805.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24805);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24805);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__24806 = content;if(G__24806)
{var bit__4208__auto__ = (G__24806.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24806.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24806.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24806);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24806);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__24807 = content;if(G__24807)
{var bit__4208__auto__ = (G__24807.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24807.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24807.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24807);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24807);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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

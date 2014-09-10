// Compiled by ClojureScript 0.0-2268
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
var opt_wrapper_31414 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_31415 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_31416 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_31416,opt_wrapper_31414,table_section_wrapper_31415,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_31414,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_31415,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_31415,cell_wrapper_31416,table_section_wrapper_31415,table_section_wrapper_31415]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3529__auto__ = div.firstChild;if(cljs.core.truth_(and__3529__auto__))
{return div.firstChild.childNodes;
} else
{return and__3529__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__31421 = cljs.core.seq.call(null,tbody);var chunk__31422 = null;var count__31423 = (0);var i__31424 = (0);while(true){
if((i__31424 < count__31423))
{var child = cljs.core._nth.call(null,chunk__31422,i__31424);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31425 = seq__31421;
var G__31426 = chunk__31422;
var G__31427 = count__31423;
var G__31428 = (i__31424 + (1));
seq__31421 = G__31425;
chunk__31422 = G__31426;
count__31423 = G__31427;
i__31424 = G__31428;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31421);if(temp__4126__auto__)
{var seq__31421__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31421__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__31421__$1);{
var G__31429 = cljs.core.chunk_rest.call(null,seq__31421__$1);
var G__31430 = c__4297__auto__;
var G__31431 = cljs.core.count.call(null,c__4297__auto__);
var G__31432 = (0);
seq__31421 = G__31429;
chunk__31422 = G__31430;
count__31423 = G__31431;
i__31424 = G__31432;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__31421__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31433 = cljs.core.next.call(null,seq__31421__$1);
var G__31434 = null;
var G__31435 = (0);
var G__31436 = (0);
seq__31421 = G__31433;
chunk__31422 = G__31434;
count__31423 = G__31435;
i__31424 = G__31436;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__31438 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__31438,(0),null);var start_wrap = cljs.core.nth.call(null,vec__31438,(1),null);var end_wrap = cljs.core.nth.call(null,vec__31438,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__31439 = wrapper.lastChild;
var G__31440 = (level - (1));
wrapper = G__31439;
level = G__31440;
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
if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3529__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3529__auto__;
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
domina.DomContent = (function (){var obj31442 = {};return obj31442;
})();
domina.nodes = (function nodes(content){if((function (){var and__3529__auto__ = content;if(and__3529__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3529__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4168__auto__ = (((content == null))?null:content);return (function (){var or__3541__auto__ = (domina.nodes[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.nodes["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3529__auto__ = nodeseq;if(and__3529__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3529__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4168__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3541__auto__ = (domina.single_node[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.single_node["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3529__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3529__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3529__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__31443){
var mesg = cljs.core.seq(arglist__31443);
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
log.cljs$lang$applyTo = (function (arglist__31444){
var mesg = cljs.core.seq(arglist__31444);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__31445){
var contents = cljs.core.seq(arglist__31445);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__31446_SHARP_){return p1__31446_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__31447_SHARP_,p2__31448_SHARP_){return goog.dom.insertChildAt(p1__31447_SHARP_,p2__31448_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31450_SHARP_,p2__31449_SHARP_){return goog.dom.insertSiblingBefore(p2__31449_SHARP_,p1__31450_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31452_SHARP_,p2__31451_SHARP_){return goog.dom.insertSiblingAfter(p2__31451_SHARP_,p1__31452_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__31454_SHARP_,p2__31453_SHARP_){return goog.dom.replaceNode(p2__31453_SHARP_,p1__31454_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__31459_31463 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31460_31464 = null;var count__31461_31465 = (0);var i__31462_31466 = (0);while(true){
if((i__31462_31466 < count__31461_31465))
{var n_31467 = cljs.core._nth.call(null,chunk__31460_31464,i__31462_31466);goog.style.setStyle(n_31467,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31468 = seq__31459_31463;
var G__31469 = chunk__31460_31464;
var G__31470 = count__31461_31465;
var G__31471 = (i__31462_31466 + (1));
seq__31459_31463 = G__31468;
chunk__31460_31464 = G__31469;
count__31461_31465 = G__31470;
i__31462_31466 = G__31471;
continue;
}
} else
{var temp__4126__auto___31472 = cljs.core.seq.call(null,seq__31459_31463);if(temp__4126__auto___31472)
{var seq__31459_31473__$1 = temp__4126__auto___31472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31459_31473__$1))
{var c__4297__auto___31474 = cljs.core.chunk_first.call(null,seq__31459_31473__$1);{
var G__31475 = cljs.core.chunk_rest.call(null,seq__31459_31473__$1);
var G__31476 = c__4297__auto___31474;
var G__31477 = cljs.core.count.call(null,c__4297__auto___31474);
var G__31478 = (0);
seq__31459_31463 = G__31475;
chunk__31460_31464 = G__31476;
count__31461_31465 = G__31477;
i__31462_31466 = G__31478;
continue;
}
} else
{var n_31479 = cljs.core.first.call(null,seq__31459_31473__$1);goog.style.setStyle(n_31479,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31480 = cljs.core.next.call(null,seq__31459_31473__$1);
var G__31481 = null;
var G__31482 = (0);
var G__31483 = (0);
seq__31459_31463 = G__31480;
chunk__31460_31464 = G__31481;
count__31461_31465 = G__31482;
i__31462_31466 = G__31483;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31484){
var content = cljs.core.first(arglist__31484);
arglist__31484 = cljs.core.next(arglist__31484);
var name = cljs.core.first(arglist__31484);
var value = cljs.core.rest(arglist__31484);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__31489_31493 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31490_31494 = null;var count__31491_31495 = (0);var i__31492_31496 = (0);while(true){
if((i__31492_31496 < count__31491_31495))
{var n_31497 = cljs.core._nth.call(null,chunk__31490_31494,i__31492_31496);n_31497.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31498 = seq__31489_31493;
var G__31499 = chunk__31490_31494;
var G__31500 = count__31491_31495;
var G__31501 = (i__31492_31496 + (1));
seq__31489_31493 = G__31498;
chunk__31490_31494 = G__31499;
count__31491_31495 = G__31500;
i__31492_31496 = G__31501;
continue;
}
} else
{var temp__4126__auto___31502 = cljs.core.seq.call(null,seq__31489_31493);if(temp__4126__auto___31502)
{var seq__31489_31503__$1 = temp__4126__auto___31502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31489_31503__$1))
{var c__4297__auto___31504 = cljs.core.chunk_first.call(null,seq__31489_31503__$1);{
var G__31505 = cljs.core.chunk_rest.call(null,seq__31489_31503__$1);
var G__31506 = c__4297__auto___31504;
var G__31507 = cljs.core.count.call(null,c__4297__auto___31504);
var G__31508 = (0);
seq__31489_31493 = G__31505;
chunk__31490_31494 = G__31506;
count__31491_31495 = G__31507;
i__31492_31496 = G__31508;
continue;
}
} else
{var n_31509 = cljs.core.first.call(null,seq__31489_31503__$1);n_31509.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31510 = cljs.core.next.call(null,seq__31489_31503__$1);
var G__31511 = null;
var G__31512 = (0);
var G__31513 = (0);
seq__31489_31493 = G__31510;
chunk__31490_31494 = G__31511;
count__31491_31495 = G__31512;
i__31492_31496 = G__31513;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__31514){
var content = cljs.core.first(arglist__31514);
arglist__31514 = cljs.core.next(arglist__31514);
var name = cljs.core.first(arglist__31514);
var value = cljs.core.rest(arglist__31514);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__31519_31523 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31520_31524 = null;var count__31521_31525 = (0);var i__31522_31526 = (0);while(true){
if((i__31522_31526 < count__31521_31525))
{var n_31527 = cljs.core._nth.call(null,chunk__31520_31524,i__31522_31526);n_31527.removeAttribute(cljs.core.name.call(null,name));
{
var G__31528 = seq__31519_31523;
var G__31529 = chunk__31520_31524;
var G__31530 = count__31521_31525;
var G__31531 = (i__31522_31526 + (1));
seq__31519_31523 = G__31528;
chunk__31520_31524 = G__31529;
count__31521_31525 = G__31530;
i__31522_31526 = G__31531;
continue;
}
} else
{var temp__4126__auto___31532 = cljs.core.seq.call(null,seq__31519_31523);if(temp__4126__auto___31532)
{var seq__31519_31533__$1 = temp__4126__auto___31532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31519_31533__$1))
{var c__4297__auto___31534 = cljs.core.chunk_first.call(null,seq__31519_31533__$1);{
var G__31535 = cljs.core.chunk_rest.call(null,seq__31519_31533__$1);
var G__31536 = c__4297__auto___31534;
var G__31537 = cljs.core.count.call(null,c__4297__auto___31534);
var G__31538 = (0);
seq__31519_31523 = G__31535;
chunk__31520_31524 = G__31536;
count__31521_31525 = G__31537;
i__31522_31526 = G__31538;
continue;
}
} else
{var n_31539 = cljs.core.first.call(null,seq__31519_31533__$1);n_31539.removeAttribute(cljs.core.name.call(null,name));
{
var G__31540 = cljs.core.next.call(null,seq__31519_31533__$1);
var G__31541 = null;
var G__31542 = (0);
var G__31543 = (0);
seq__31519_31523 = G__31540;
chunk__31520_31524 = G__31541;
count__31521_31525 = G__31542;
i__31522_31526 = G__31543;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__31545 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__31545,(0),null);var v = cljs.core.nth.call(null,vec__31545,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{return v;
} else
{return and__3529__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__31546_SHARP_){var attr = attrs__$1.item(p1__31546_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__31553_31559 = cljs.core.seq.call(null,styles);var chunk__31554_31560 = null;var count__31555_31561 = (0);var i__31556_31562 = (0);while(true){
if((i__31556_31562 < count__31555_31561))
{var vec__31557_31563 = cljs.core._nth.call(null,chunk__31554_31560,i__31556_31562);var name_31564 = cljs.core.nth.call(null,vec__31557_31563,(0),null);var value_31565 = cljs.core.nth.call(null,vec__31557_31563,(1),null);domina.set_style_BANG_.call(null,content,name_31564,value_31565);
{
var G__31566 = seq__31553_31559;
var G__31567 = chunk__31554_31560;
var G__31568 = count__31555_31561;
var G__31569 = (i__31556_31562 + (1));
seq__31553_31559 = G__31566;
chunk__31554_31560 = G__31567;
count__31555_31561 = G__31568;
i__31556_31562 = G__31569;
continue;
}
} else
{var temp__4126__auto___31570 = cljs.core.seq.call(null,seq__31553_31559);if(temp__4126__auto___31570)
{var seq__31553_31571__$1 = temp__4126__auto___31570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31553_31571__$1))
{var c__4297__auto___31572 = cljs.core.chunk_first.call(null,seq__31553_31571__$1);{
var G__31573 = cljs.core.chunk_rest.call(null,seq__31553_31571__$1);
var G__31574 = c__4297__auto___31572;
var G__31575 = cljs.core.count.call(null,c__4297__auto___31572);
var G__31576 = (0);
seq__31553_31559 = G__31573;
chunk__31554_31560 = G__31574;
count__31555_31561 = G__31575;
i__31556_31562 = G__31576;
continue;
}
} else
{var vec__31558_31577 = cljs.core.first.call(null,seq__31553_31571__$1);var name_31578 = cljs.core.nth.call(null,vec__31558_31577,(0),null);var value_31579 = cljs.core.nth.call(null,vec__31558_31577,(1),null);domina.set_style_BANG_.call(null,content,name_31578,value_31579);
{
var G__31580 = cljs.core.next.call(null,seq__31553_31571__$1);
var G__31581 = null;
var G__31582 = (0);
var G__31583 = (0);
seq__31553_31559 = G__31580;
chunk__31554_31560 = G__31581;
count__31555_31561 = G__31582;
i__31556_31562 = G__31583;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__31590_31596 = cljs.core.seq.call(null,attrs);var chunk__31591_31597 = null;var count__31592_31598 = (0);var i__31593_31599 = (0);while(true){
if((i__31593_31599 < count__31592_31598))
{var vec__31594_31600 = cljs.core._nth.call(null,chunk__31591_31597,i__31593_31599);var name_31601 = cljs.core.nth.call(null,vec__31594_31600,(0),null);var value_31602 = cljs.core.nth.call(null,vec__31594_31600,(1),null);domina.set_attr_BANG_.call(null,content,name_31601,value_31602);
{
var G__31603 = seq__31590_31596;
var G__31604 = chunk__31591_31597;
var G__31605 = count__31592_31598;
var G__31606 = (i__31593_31599 + (1));
seq__31590_31596 = G__31603;
chunk__31591_31597 = G__31604;
count__31592_31598 = G__31605;
i__31593_31599 = G__31606;
continue;
}
} else
{var temp__4126__auto___31607 = cljs.core.seq.call(null,seq__31590_31596);if(temp__4126__auto___31607)
{var seq__31590_31608__$1 = temp__4126__auto___31607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31590_31608__$1))
{var c__4297__auto___31609 = cljs.core.chunk_first.call(null,seq__31590_31608__$1);{
var G__31610 = cljs.core.chunk_rest.call(null,seq__31590_31608__$1);
var G__31611 = c__4297__auto___31609;
var G__31612 = cljs.core.count.call(null,c__4297__auto___31609);
var G__31613 = (0);
seq__31590_31596 = G__31610;
chunk__31591_31597 = G__31611;
count__31592_31598 = G__31612;
i__31593_31599 = G__31613;
continue;
}
} else
{var vec__31595_31614 = cljs.core.first.call(null,seq__31590_31608__$1);var name_31615 = cljs.core.nth.call(null,vec__31595_31614,(0),null);var value_31616 = cljs.core.nth.call(null,vec__31595_31614,(1),null);domina.set_attr_BANG_.call(null,content,name_31615,value_31616);
{
var G__31617 = cljs.core.next.call(null,seq__31590_31608__$1);
var G__31618 = null;
var G__31619 = (0);
var G__31620 = (0);
seq__31590_31596 = G__31617;
chunk__31591_31597 = G__31618;
count__31592_31598 = G__31619;
i__31593_31599 = G__31620;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__31625_31629 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31626_31630 = null;var count__31627_31631 = (0);var i__31628_31632 = (0);while(true){
if((i__31628_31632 < count__31627_31631))
{var node_31633 = cljs.core._nth.call(null,chunk__31626_31630,i__31628_31632);goog.dom.classes.add(node_31633,class$);
{
var G__31634 = seq__31625_31629;
var G__31635 = chunk__31626_31630;
var G__31636 = count__31627_31631;
var G__31637 = (i__31628_31632 + (1));
seq__31625_31629 = G__31634;
chunk__31626_31630 = G__31635;
count__31627_31631 = G__31636;
i__31628_31632 = G__31637;
continue;
}
} else
{var temp__4126__auto___31638 = cljs.core.seq.call(null,seq__31625_31629);if(temp__4126__auto___31638)
{var seq__31625_31639__$1 = temp__4126__auto___31638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31625_31639__$1))
{var c__4297__auto___31640 = cljs.core.chunk_first.call(null,seq__31625_31639__$1);{
var G__31641 = cljs.core.chunk_rest.call(null,seq__31625_31639__$1);
var G__31642 = c__4297__auto___31640;
var G__31643 = cljs.core.count.call(null,c__4297__auto___31640);
var G__31644 = (0);
seq__31625_31629 = G__31641;
chunk__31626_31630 = G__31642;
count__31627_31631 = G__31643;
i__31628_31632 = G__31644;
continue;
}
} else
{var node_31645 = cljs.core.first.call(null,seq__31625_31639__$1);goog.dom.classes.add(node_31645,class$);
{
var G__31646 = cljs.core.next.call(null,seq__31625_31639__$1);
var G__31647 = null;
var G__31648 = (0);
var G__31649 = (0);
seq__31625_31629 = G__31646;
chunk__31626_31630 = G__31647;
count__31627_31631 = G__31648;
i__31628_31632 = G__31649;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__31654_31658 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31655_31659 = null;var count__31656_31660 = (0);var i__31657_31661 = (0);while(true){
if((i__31657_31661 < count__31656_31660))
{var node_31662 = cljs.core._nth.call(null,chunk__31655_31659,i__31657_31661);goog.dom.classes.remove(node_31662,class$);
{
var G__31663 = seq__31654_31658;
var G__31664 = chunk__31655_31659;
var G__31665 = count__31656_31660;
var G__31666 = (i__31657_31661 + (1));
seq__31654_31658 = G__31663;
chunk__31655_31659 = G__31664;
count__31656_31660 = G__31665;
i__31657_31661 = G__31666;
continue;
}
} else
{var temp__4126__auto___31667 = cljs.core.seq.call(null,seq__31654_31658);if(temp__4126__auto___31667)
{var seq__31654_31668__$1 = temp__4126__auto___31667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31654_31668__$1))
{var c__4297__auto___31669 = cljs.core.chunk_first.call(null,seq__31654_31668__$1);{
var G__31670 = cljs.core.chunk_rest.call(null,seq__31654_31668__$1);
var G__31671 = c__4297__auto___31669;
var G__31672 = cljs.core.count.call(null,c__4297__auto___31669);
var G__31673 = (0);
seq__31654_31658 = G__31670;
chunk__31655_31659 = G__31671;
count__31656_31660 = G__31672;
i__31657_31661 = G__31673;
continue;
}
} else
{var node_31674 = cljs.core.first.call(null,seq__31654_31668__$1);goog.dom.classes.remove(node_31674,class$);
{
var G__31675 = cljs.core.next.call(null,seq__31654_31668__$1);
var G__31676 = null;
var G__31677 = (0);
var G__31678 = (0);
seq__31654_31658 = G__31675;
chunk__31655_31659 = G__31676;
count__31656_31660 = G__31677;
i__31657_31661 = G__31678;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__31683_31687 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31684_31688 = null;var count__31685_31689 = (0);var i__31686_31690 = (0);while(true){
if((i__31686_31690 < count__31685_31689))
{var node_31691 = cljs.core._nth.call(null,chunk__31684_31688,i__31686_31690);goog.dom.classes.toggle(node_31691,class$);
{
var G__31692 = seq__31683_31687;
var G__31693 = chunk__31684_31688;
var G__31694 = count__31685_31689;
var G__31695 = (i__31686_31690 + (1));
seq__31683_31687 = G__31692;
chunk__31684_31688 = G__31693;
count__31685_31689 = G__31694;
i__31686_31690 = G__31695;
continue;
}
} else
{var temp__4126__auto___31696 = cljs.core.seq.call(null,seq__31683_31687);if(temp__4126__auto___31696)
{var seq__31683_31697__$1 = temp__4126__auto___31696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31683_31697__$1))
{var c__4297__auto___31698 = cljs.core.chunk_first.call(null,seq__31683_31697__$1);{
var G__31699 = cljs.core.chunk_rest.call(null,seq__31683_31697__$1);
var G__31700 = c__4297__auto___31698;
var G__31701 = cljs.core.count.call(null,c__4297__auto___31698);
var G__31702 = (0);
seq__31683_31687 = G__31699;
chunk__31684_31688 = G__31700;
count__31685_31689 = G__31701;
i__31686_31690 = G__31702;
continue;
}
} else
{var node_31703 = cljs.core.first.call(null,seq__31683_31697__$1);goog.dom.classes.toggle(node_31703,class$);
{
var G__31704 = cljs.core.next.call(null,seq__31683_31697__$1);
var G__31705 = null;
var G__31706 = (0);
var G__31707 = (0);
seq__31683_31687 = G__31704;
chunk__31684_31688 = G__31705;
count__31685_31689 = G__31706;
i__31686_31690 = G__31707;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_31716__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__31712_31717 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31713_31718 = null;var count__31714_31719 = (0);var i__31715_31720 = (0);while(true){
if((i__31715_31720 < count__31714_31719))
{var node_31721 = cljs.core._nth.call(null,chunk__31713_31718,i__31715_31720);goog.dom.classes.set(node_31721,classes_31716__$1);
{
var G__31722 = seq__31712_31717;
var G__31723 = chunk__31713_31718;
var G__31724 = count__31714_31719;
var G__31725 = (i__31715_31720 + (1));
seq__31712_31717 = G__31722;
chunk__31713_31718 = G__31723;
count__31714_31719 = G__31724;
i__31715_31720 = G__31725;
continue;
}
} else
{var temp__4126__auto___31726 = cljs.core.seq.call(null,seq__31712_31717);if(temp__4126__auto___31726)
{var seq__31712_31727__$1 = temp__4126__auto___31726;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31712_31727__$1))
{var c__4297__auto___31728 = cljs.core.chunk_first.call(null,seq__31712_31727__$1);{
var G__31729 = cljs.core.chunk_rest.call(null,seq__31712_31727__$1);
var G__31730 = c__4297__auto___31728;
var G__31731 = cljs.core.count.call(null,c__4297__auto___31728);
var G__31732 = (0);
seq__31712_31717 = G__31729;
chunk__31713_31718 = G__31730;
count__31714_31719 = G__31731;
i__31715_31720 = G__31732;
continue;
}
} else
{var node_31733 = cljs.core.first.call(null,seq__31712_31727__$1);goog.dom.classes.set(node_31733,classes_31716__$1);
{
var G__31734 = cljs.core.next.call(null,seq__31712_31727__$1);
var G__31735 = null;
var G__31736 = (0);
var G__31737 = (0);
seq__31712_31717 = G__31734;
chunk__31713_31718 = G__31735;
count__31714_31719 = G__31736;
i__31715_31720 = G__31737;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__31742_31746 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31743_31747 = null;var count__31744_31748 = (0);var i__31745_31749 = (0);while(true){
if((i__31745_31749 < count__31744_31748))
{var node_31750 = cljs.core._nth.call(null,chunk__31743_31747,i__31745_31749);goog.dom.setTextContent(node_31750,value);
{
var G__31751 = seq__31742_31746;
var G__31752 = chunk__31743_31747;
var G__31753 = count__31744_31748;
var G__31754 = (i__31745_31749 + (1));
seq__31742_31746 = G__31751;
chunk__31743_31747 = G__31752;
count__31744_31748 = G__31753;
i__31745_31749 = G__31754;
continue;
}
} else
{var temp__4126__auto___31755 = cljs.core.seq.call(null,seq__31742_31746);if(temp__4126__auto___31755)
{var seq__31742_31756__$1 = temp__4126__auto___31755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31742_31756__$1))
{var c__4297__auto___31757 = cljs.core.chunk_first.call(null,seq__31742_31756__$1);{
var G__31758 = cljs.core.chunk_rest.call(null,seq__31742_31756__$1);
var G__31759 = c__4297__auto___31757;
var G__31760 = cljs.core.count.call(null,c__4297__auto___31757);
var G__31761 = (0);
seq__31742_31746 = G__31758;
chunk__31743_31747 = G__31759;
count__31744_31748 = G__31760;
i__31745_31749 = G__31761;
continue;
}
} else
{var node_31762 = cljs.core.first.call(null,seq__31742_31756__$1);goog.dom.setTextContent(node_31762,value);
{
var G__31763 = cljs.core.next.call(null,seq__31742_31756__$1);
var G__31764 = null;
var G__31765 = (0);
var G__31766 = (0);
seq__31742_31746 = G__31763;
chunk__31743_31747 = G__31764;
count__31744_31748 = G__31765;
i__31745_31749 = G__31766;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__31771_31775 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31772_31776 = null;var count__31773_31777 = (0);var i__31774_31778 = (0);while(true){
if((i__31774_31778 < count__31773_31777))
{var node_31779 = cljs.core._nth.call(null,chunk__31772_31776,i__31774_31778);goog.dom.forms.setValue(node_31779,value);
{
var G__31780 = seq__31771_31775;
var G__31781 = chunk__31772_31776;
var G__31782 = count__31773_31777;
var G__31783 = (i__31774_31778 + (1));
seq__31771_31775 = G__31780;
chunk__31772_31776 = G__31781;
count__31773_31777 = G__31782;
i__31774_31778 = G__31783;
continue;
}
} else
{var temp__4126__auto___31784 = cljs.core.seq.call(null,seq__31771_31775);if(temp__4126__auto___31784)
{var seq__31771_31785__$1 = temp__4126__auto___31784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31771_31785__$1))
{var c__4297__auto___31786 = cljs.core.chunk_first.call(null,seq__31771_31785__$1);{
var G__31787 = cljs.core.chunk_rest.call(null,seq__31771_31785__$1);
var G__31788 = c__4297__auto___31786;
var G__31789 = cljs.core.count.call(null,c__4297__auto___31786);
var G__31790 = (0);
seq__31771_31775 = G__31787;
chunk__31772_31776 = G__31788;
count__31773_31777 = G__31789;
i__31774_31778 = G__31790;
continue;
}
} else
{var node_31791 = cljs.core.first.call(null,seq__31771_31785__$1);goog.dom.forms.setValue(node_31791,value);
{
var G__31792 = cljs.core.next.call(null,seq__31771_31785__$1);
var G__31793 = null;
var G__31794 = (0);
var G__31795 = (0);
seq__31771_31775 = G__31792;
chunk__31772_31776 = G__31793;
count__31773_31777 = G__31794;
i__31774_31778 = G__31795;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3529__auto__ = allows_inner_html_QMARK_;if(and__3529__auto__)
{var and__3529__auto____$1 = (function (){var or__3541__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3529__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{var value_31806 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__31802_31807 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31803_31808 = null;var count__31804_31809 = (0);var i__31805_31810 = (0);while(true){
if((i__31805_31810 < count__31804_31809))
{var node_31811 = cljs.core._nth.call(null,chunk__31803_31808,i__31805_31810);node_31811.innerHTML = value_31806;
{
var G__31812 = seq__31802_31807;
var G__31813 = chunk__31803_31808;
var G__31814 = count__31804_31809;
var G__31815 = (i__31805_31810 + (1));
seq__31802_31807 = G__31812;
chunk__31803_31808 = G__31813;
count__31804_31809 = G__31814;
i__31805_31810 = G__31815;
continue;
}
} else
{var temp__4126__auto___31816 = cljs.core.seq.call(null,seq__31802_31807);if(temp__4126__auto___31816)
{var seq__31802_31817__$1 = temp__4126__auto___31816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31802_31817__$1))
{var c__4297__auto___31818 = cljs.core.chunk_first.call(null,seq__31802_31817__$1);{
var G__31819 = cljs.core.chunk_rest.call(null,seq__31802_31817__$1);
var G__31820 = c__4297__auto___31818;
var G__31821 = cljs.core.count.call(null,c__4297__auto___31818);
var G__31822 = (0);
seq__31802_31807 = G__31819;
chunk__31803_31808 = G__31820;
count__31804_31809 = G__31821;
i__31805_31810 = G__31822;
continue;
}
} else
{var node_31823 = cljs.core.first.call(null,seq__31802_31817__$1);node_31823.innerHTML = value_31806;
{
var G__31824 = cljs.core.next.call(null,seq__31802_31817__$1);
var G__31825 = null;
var G__31826 = (0);
var G__31827 = (0);
seq__31802_31807 = G__31824;
chunk__31803_31808 = G__31825;
count__31804_31809 = G__31826;
i__31805_31810 = G__31827;
continue;
}
}
} else
{}
}
break;
}
}catch (e31801){if((e31801 instanceof Error))
{var e_31828 = e31801;domina.replace_children_BANG_.call(null,content,value_31806);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31801;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3529__auto__ = bubble;if(cljs.core.truth_(and__3529__auto__))
{return (value == null);
} else
{return and__3529__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3541__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__31835_31839 = cljs.core.seq.call(null,children);var chunk__31836_31840 = null;var count__31837_31841 = (0);var i__31838_31842 = (0);while(true){
if((i__31838_31842 < count__31837_31841))
{var child_31843 = cljs.core._nth.call(null,chunk__31836_31840,i__31838_31842);frag.appendChild(child_31843);
{
var G__31844 = seq__31835_31839;
var G__31845 = chunk__31836_31840;
var G__31846 = count__31837_31841;
var G__31847 = (i__31838_31842 + (1));
seq__31835_31839 = G__31844;
chunk__31836_31840 = G__31845;
count__31837_31841 = G__31846;
i__31838_31842 = G__31847;
continue;
}
} else
{var temp__4126__auto___31848 = cljs.core.seq.call(null,seq__31835_31839);if(temp__4126__auto___31848)
{var seq__31835_31849__$1 = temp__4126__auto___31848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31835_31849__$1))
{var c__4297__auto___31850 = cljs.core.chunk_first.call(null,seq__31835_31849__$1);{
var G__31851 = cljs.core.chunk_rest.call(null,seq__31835_31849__$1);
var G__31852 = c__4297__auto___31850;
var G__31853 = cljs.core.count.call(null,c__4297__auto___31850);
var G__31854 = (0);
seq__31835_31839 = G__31851;
chunk__31836_31840 = G__31852;
count__31837_31841 = G__31853;
i__31838_31842 = G__31854;
continue;
}
} else
{var child_31855 = cljs.core.first.call(null,seq__31835_31849__$1);frag.appendChild(child_31855);
{
var G__31856 = cljs.core.next.call(null,seq__31835_31849__$1);
var G__31857 = null;
var G__31858 = (0);
var G__31859 = (0);
seq__31835_31839 = G__31856;
chunk__31836_31840 = G__31857;
count__31837_31841 = G__31858;
i__31838_31842 = G__31859;
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
return (function (p1__31829_SHARP_,p2__31830_SHARP_){return f.call(null,p1__31829_SHARP_,p2__31830_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3529__auto__ = obj;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3529__auto____$1)
{return obj.length;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
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
{if((function (){var G__31861 = list_thing;if(G__31861)
{var bit__4191__auto__ = (G__31861.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__31861.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31861.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31861);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31861);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__31862 = content;if(G__31862)
{var bit__4191__auto__ = (G__31862.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__31862.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31862.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31862);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31862);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__31863 = content;if(G__31863)
{var bit__4191__auto__ = (G__31863.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__31863.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31863.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31863);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31863);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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

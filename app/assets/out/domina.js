// Compiled by ClojureScript 0.0-2080
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
var opt_wrapper_14528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14529 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_14530 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_14529,table_section_wrapper_14529,opt_wrapper_14528,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_14530,table_section_wrapper_14529,cell_wrapper_14530,opt_wrapper_14528,table_section_wrapper_14529,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_14529]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__14535 = cljs.core.seq.call(null,tbody);var chunk__14536 = null;var count__14537 = 0;var i__14538 = 0;while(true){
if((i__14538 < count__14537))
{var child = cljs.core._nth.call(null,chunk__14536,i__14538);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14539 = seq__14535;
var G__14540 = chunk__14536;
var G__14541 = count__14537;
var G__14542 = (i__14538 + 1);
seq__14535 = G__14539;
chunk__14536 = G__14540;
count__14537 = G__14541;
i__14538 = G__14542;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14535);if(temp__4092__auto__)
{var seq__14535__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14535__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__14535__$1);{
var G__14543 = cljs.core.chunk_rest.call(null,seq__14535__$1);
var G__14544 = c__4015__auto__;
var G__14545 = cljs.core.count.call(null,c__4015__auto__);
var G__14546 = 0;
seq__14535 = G__14543;
chunk__14536 = G__14544;
count__14537 = G__14545;
i__14538 = G__14546;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__14535__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14547 = cljs.core.next.call(null,seq__14535__$1);
var G__14548 = null;
var G__14549 = 0;
var G__14550 = 0;
seq__14535 = G__14547;
chunk__14536 = G__14548;
count__14537 = G__14549;
i__14538 = G__14550;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__14552 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__14552,0,null);var start_wrap = cljs.core.nth.call(null,vec__14552,1,null);var end_wrap = cljs.core.nth.call(null,vec__14552,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__14553 = wrapper.lastChild;
var G__14554 = (level - 1);
wrapper = G__14553;
level = G__14554;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj14556 = {};return obj14556;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__14557){
var mesg = cljs.core.seq(arglist__14557);
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
log.cljs$lang$applyTo = (function (arglist__14558){
var mesg = cljs.core.seq(arglist__14558);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__14559){
var contents = cljs.core.seq(arglist__14559);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__14560_SHARP_){return p1__14560_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__14561_SHARP_,p2__14562_SHARP_){return goog.dom.insertChildAt(p1__14561_SHARP_,p2__14562_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14564_SHARP_,p2__14563_SHARP_){return goog.dom.insertSiblingBefore(p2__14563_SHARP_,p1__14564_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14566_SHARP_,p2__14565_SHARP_){return goog.dom.insertSiblingAfter(p2__14565_SHARP_,p1__14566_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__14568_SHARP_,p2__14567_SHARP_){return goog.dom.replaceNode(p2__14567_SHARP_,p1__14568_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__14573_14577 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14574_14578 = null;var count__14575_14579 = 0;var i__14576_14580 = 0;while(true){
if((i__14576_14580 < count__14575_14579))
{var n_14581 = cljs.core._nth.call(null,chunk__14574_14578,i__14576_14580);goog.style.setStyle(n_14581,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14582 = seq__14573_14577;
var G__14583 = chunk__14574_14578;
var G__14584 = count__14575_14579;
var G__14585 = (i__14576_14580 + 1);
seq__14573_14577 = G__14582;
chunk__14574_14578 = G__14583;
count__14575_14579 = G__14584;
i__14576_14580 = G__14585;
continue;
}
} else
{var temp__4092__auto___14586 = cljs.core.seq.call(null,seq__14573_14577);if(temp__4092__auto___14586)
{var seq__14573_14587__$1 = temp__4092__auto___14586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14573_14587__$1))
{var c__4015__auto___14588 = cljs.core.chunk_first.call(null,seq__14573_14587__$1);{
var G__14589 = cljs.core.chunk_rest.call(null,seq__14573_14587__$1);
var G__14590 = c__4015__auto___14588;
var G__14591 = cljs.core.count.call(null,c__4015__auto___14588);
var G__14592 = 0;
seq__14573_14577 = G__14589;
chunk__14574_14578 = G__14590;
count__14575_14579 = G__14591;
i__14576_14580 = G__14592;
continue;
}
} else
{var n_14593 = cljs.core.first.call(null,seq__14573_14587__$1);goog.style.setStyle(n_14593,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14594 = cljs.core.next.call(null,seq__14573_14587__$1);
var G__14595 = null;
var G__14596 = 0;
var G__14597 = 0;
seq__14573_14577 = G__14594;
chunk__14574_14578 = G__14595;
count__14575_14579 = G__14596;
i__14576_14580 = G__14597;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14598){
var content = cljs.core.first(arglist__14598);
arglist__14598 = cljs.core.next(arglist__14598);
var name = cljs.core.first(arglist__14598);
var value = cljs.core.rest(arglist__14598);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__14603_14607 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14604_14608 = null;var count__14605_14609 = 0;var i__14606_14610 = 0;while(true){
if((i__14606_14610 < count__14605_14609))
{var n_14611 = cljs.core._nth.call(null,chunk__14604_14608,i__14606_14610);n_14611.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14612 = seq__14603_14607;
var G__14613 = chunk__14604_14608;
var G__14614 = count__14605_14609;
var G__14615 = (i__14606_14610 + 1);
seq__14603_14607 = G__14612;
chunk__14604_14608 = G__14613;
count__14605_14609 = G__14614;
i__14606_14610 = G__14615;
continue;
}
} else
{var temp__4092__auto___14616 = cljs.core.seq.call(null,seq__14603_14607);if(temp__4092__auto___14616)
{var seq__14603_14617__$1 = temp__4092__auto___14616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14603_14617__$1))
{var c__4015__auto___14618 = cljs.core.chunk_first.call(null,seq__14603_14617__$1);{
var G__14619 = cljs.core.chunk_rest.call(null,seq__14603_14617__$1);
var G__14620 = c__4015__auto___14618;
var G__14621 = cljs.core.count.call(null,c__4015__auto___14618);
var G__14622 = 0;
seq__14603_14607 = G__14619;
chunk__14604_14608 = G__14620;
count__14605_14609 = G__14621;
i__14606_14610 = G__14622;
continue;
}
} else
{var n_14623 = cljs.core.first.call(null,seq__14603_14617__$1);n_14623.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14624 = cljs.core.next.call(null,seq__14603_14617__$1);
var G__14625 = null;
var G__14626 = 0;
var G__14627 = 0;
seq__14603_14607 = G__14624;
chunk__14604_14608 = G__14625;
count__14605_14609 = G__14626;
i__14606_14610 = G__14627;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14628){
var content = cljs.core.first(arglist__14628);
arglist__14628 = cljs.core.next(arglist__14628);
var name = cljs.core.first(arglist__14628);
var value = cljs.core.rest(arglist__14628);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__14633_14637 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14634_14638 = null;var count__14635_14639 = 0;var i__14636_14640 = 0;while(true){
if((i__14636_14640 < count__14635_14639))
{var n_14641 = cljs.core._nth.call(null,chunk__14634_14638,i__14636_14640);n_14641.removeAttribute(cljs.core.name.call(null,name));
{
var G__14642 = seq__14633_14637;
var G__14643 = chunk__14634_14638;
var G__14644 = count__14635_14639;
var G__14645 = (i__14636_14640 + 1);
seq__14633_14637 = G__14642;
chunk__14634_14638 = G__14643;
count__14635_14639 = G__14644;
i__14636_14640 = G__14645;
continue;
}
} else
{var temp__4092__auto___14646 = cljs.core.seq.call(null,seq__14633_14637);if(temp__4092__auto___14646)
{var seq__14633_14647__$1 = temp__4092__auto___14646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14633_14647__$1))
{var c__4015__auto___14648 = cljs.core.chunk_first.call(null,seq__14633_14647__$1);{
var G__14649 = cljs.core.chunk_rest.call(null,seq__14633_14647__$1);
var G__14650 = c__4015__auto___14648;
var G__14651 = cljs.core.count.call(null,c__4015__auto___14648);
var G__14652 = 0;
seq__14633_14637 = G__14649;
chunk__14634_14638 = G__14650;
count__14635_14639 = G__14651;
i__14636_14640 = G__14652;
continue;
}
} else
{var n_14653 = cljs.core.first.call(null,seq__14633_14647__$1);n_14653.removeAttribute(cljs.core.name.call(null,name));
{
var G__14654 = cljs.core.next.call(null,seq__14633_14647__$1);
var G__14655 = null;
var G__14656 = 0;
var G__14657 = 0;
seq__14633_14637 = G__14654;
chunk__14634_14638 = G__14655;
count__14635_14639 = G__14656;
i__14636_14640 = G__14657;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__14659 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__14659,0,null);var v = cljs.core.nth.call(null,vec__14659,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__14660_SHARP_){var attr = attrs__$1.item(p1__14660_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__14667_14673 = cljs.core.seq.call(null,styles);var chunk__14668_14674 = null;var count__14669_14675 = 0;var i__14670_14676 = 0;while(true){
if((i__14670_14676 < count__14669_14675))
{var vec__14671_14677 = cljs.core._nth.call(null,chunk__14668_14674,i__14670_14676);var name_14678 = cljs.core.nth.call(null,vec__14671_14677,0,null);var value_14679 = cljs.core.nth.call(null,vec__14671_14677,1,null);domina.set_style_BANG_.call(null,content,name_14678,value_14679);
{
var G__14680 = seq__14667_14673;
var G__14681 = chunk__14668_14674;
var G__14682 = count__14669_14675;
var G__14683 = (i__14670_14676 + 1);
seq__14667_14673 = G__14680;
chunk__14668_14674 = G__14681;
count__14669_14675 = G__14682;
i__14670_14676 = G__14683;
continue;
}
} else
{var temp__4092__auto___14684 = cljs.core.seq.call(null,seq__14667_14673);if(temp__4092__auto___14684)
{var seq__14667_14685__$1 = temp__4092__auto___14684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14667_14685__$1))
{var c__4015__auto___14686 = cljs.core.chunk_first.call(null,seq__14667_14685__$1);{
var G__14687 = cljs.core.chunk_rest.call(null,seq__14667_14685__$1);
var G__14688 = c__4015__auto___14686;
var G__14689 = cljs.core.count.call(null,c__4015__auto___14686);
var G__14690 = 0;
seq__14667_14673 = G__14687;
chunk__14668_14674 = G__14688;
count__14669_14675 = G__14689;
i__14670_14676 = G__14690;
continue;
}
} else
{var vec__14672_14691 = cljs.core.first.call(null,seq__14667_14685__$1);var name_14692 = cljs.core.nth.call(null,vec__14672_14691,0,null);var value_14693 = cljs.core.nth.call(null,vec__14672_14691,1,null);domina.set_style_BANG_.call(null,content,name_14692,value_14693);
{
var G__14694 = cljs.core.next.call(null,seq__14667_14685__$1);
var G__14695 = null;
var G__14696 = 0;
var G__14697 = 0;
seq__14667_14673 = G__14694;
chunk__14668_14674 = G__14695;
count__14669_14675 = G__14696;
i__14670_14676 = G__14697;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__14704_14710 = cljs.core.seq.call(null,attrs);var chunk__14705_14711 = null;var count__14706_14712 = 0;var i__14707_14713 = 0;while(true){
if((i__14707_14713 < count__14706_14712))
{var vec__14708_14714 = cljs.core._nth.call(null,chunk__14705_14711,i__14707_14713);var name_14715 = cljs.core.nth.call(null,vec__14708_14714,0,null);var value_14716 = cljs.core.nth.call(null,vec__14708_14714,1,null);domina.set_attr_BANG_.call(null,content,name_14715,value_14716);
{
var G__14717 = seq__14704_14710;
var G__14718 = chunk__14705_14711;
var G__14719 = count__14706_14712;
var G__14720 = (i__14707_14713 + 1);
seq__14704_14710 = G__14717;
chunk__14705_14711 = G__14718;
count__14706_14712 = G__14719;
i__14707_14713 = G__14720;
continue;
}
} else
{var temp__4092__auto___14721 = cljs.core.seq.call(null,seq__14704_14710);if(temp__4092__auto___14721)
{var seq__14704_14722__$1 = temp__4092__auto___14721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14704_14722__$1))
{var c__4015__auto___14723 = cljs.core.chunk_first.call(null,seq__14704_14722__$1);{
var G__14724 = cljs.core.chunk_rest.call(null,seq__14704_14722__$1);
var G__14725 = c__4015__auto___14723;
var G__14726 = cljs.core.count.call(null,c__4015__auto___14723);
var G__14727 = 0;
seq__14704_14710 = G__14724;
chunk__14705_14711 = G__14725;
count__14706_14712 = G__14726;
i__14707_14713 = G__14727;
continue;
}
} else
{var vec__14709_14728 = cljs.core.first.call(null,seq__14704_14722__$1);var name_14729 = cljs.core.nth.call(null,vec__14709_14728,0,null);var value_14730 = cljs.core.nth.call(null,vec__14709_14728,1,null);domina.set_attr_BANG_.call(null,content,name_14729,value_14730);
{
var G__14731 = cljs.core.next.call(null,seq__14704_14722__$1);
var G__14732 = null;
var G__14733 = 0;
var G__14734 = 0;
seq__14704_14710 = G__14731;
chunk__14705_14711 = G__14732;
count__14706_14712 = G__14733;
i__14707_14713 = G__14734;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__14739_14743 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14740_14744 = null;var count__14741_14745 = 0;var i__14742_14746 = 0;while(true){
if((i__14742_14746 < count__14741_14745))
{var node_14747 = cljs.core._nth.call(null,chunk__14740_14744,i__14742_14746);goog.dom.classes.add(node_14747,class$);
{
var G__14748 = seq__14739_14743;
var G__14749 = chunk__14740_14744;
var G__14750 = count__14741_14745;
var G__14751 = (i__14742_14746 + 1);
seq__14739_14743 = G__14748;
chunk__14740_14744 = G__14749;
count__14741_14745 = G__14750;
i__14742_14746 = G__14751;
continue;
}
} else
{var temp__4092__auto___14752 = cljs.core.seq.call(null,seq__14739_14743);if(temp__4092__auto___14752)
{var seq__14739_14753__$1 = temp__4092__auto___14752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14739_14753__$1))
{var c__4015__auto___14754 = cljs.core.chunk_first.call(null,seq__14739_14753__$1);{
var G__14755 = cljs.core.chunk_rest.call(null,seq__14739_14753__$1);
var G__14756 = c__4015__auto___14754;
var G__14757 = cljs.core.count.call(null,c__4015__auto___14754);
var G__14758 = 0;
seq__14739_14743 = G__14755;
chunk__14740_14744 = G__14756;
count__14741_14745 = G__14757;
i__14742_14746 = G__14758;
continue;
}
} else
{var node_14759 = cljs.core.first.call(null,seq__14739_14753__$1);goog.dom.classes.add(node_14759,class$);
{
var G__14760 = cljs.core.next.call(null,seq__14739_14753__$1);
var G__14761 = null;
var G__14762 = 0;
var G__14763 = 0;
seq__14739_14743 = G__14760;
chunk__14740_14744 = G__14761;
count__14741_14745 = G__14762;
i__14742_14746 = G__14763;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__14768_14772 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14769_14773 = null;var count__14770_14774 = 0;var i__14771_14775 = 0;while(true){
if((i__14771_14775 < count__14770_14774))
{var node_14776 = cljs.core._nth.call(null,chunk__14769_14773,i__14771_14775);goog.dom.classes.remove(node_14776,class$);
{
var G__14777 = seq__14768_14772;
var G__14778 = chunk__14769_14773;
var G__14779 = count__14770_14774;
var G__14780 = (i__14771_14775 + 1);
seq__14768_14772 = G__14777;
chunk__14769_14773 = G__14778;
count__14770_14774 = G__14779;
i__14771_14775 = G__14780;
continue;
}
} else
{var temp__4092__auto___14781 = cljs.core.seq.call(null,seq__14768_14772);if(temp__4092__auto___14781)
{var seq__14768_14782__$1 = temp__4092__auto___14781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14768_14782__$1))
{var c__4015__auto___14783 = cljs.core.chunk_first.call(null,seq__14768_14782__$1);{
var G__14784 = cljs.core.chunk_rest.call(null,seq__14768_14782__$1);
var G__14785 = c__4015__auto___14783;
var G__14786 = cljs.core.count.call(null,c__4015__auto___14783);
var G__14787 = 0;
seq__14768_14772 = G__14784;
chunk__14769_14773 = G__14785;
count__14770_14774 = G__14786;
i__14771_14775 = G__14787;
continue;
}
} else
{var node_14788 = cljs.core.first.call(null,seq__14768_14782__$1);goog.dom.classes.remove(node_14788,class$);
{
var G__14789 = cljs.core.next.call(null,seq__14768_14782__$1);
var G__14790 = null;
var G__14791 = 0;
var G__14792 = 0;
seq__14768_14772 = G__14789;
chunk__14769_14773 = G__14790;
count__14770_14774 = G__14791;
i__14771_14775 = G__14792;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__14797_14801 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14798_14802 = null;var count__14799_14803 = 0;var i__14800_14804 = 0;while(true){
if((i__14800_14804 < count__14799_14803))
{var node_14805 = cljs.core._nth.call(null,chunk__14798_14802,i__14800_14804);goog.dom.classes.toggle(node_14805,class$);
{
var G__14806 = seq__14797_14801;
var G__14807 = chunk__14798_14802;
var G__14808 = count__14799_14803;
var G__14809 = (i__14800_14804 + 1);
seq__14797_14801 = G__14806;
chunk__14798_14802 = G__14807;
count__14799_14803 = G__14808;
i__14800_14804 = G__14809;
continue;
}
} else
{var temp__4092__auto___14810 = cljs.core.seq.call(null,seq__14797_14801);if(temp__4092__auto___14810)
{var seq__14797_14811__$1 = temp__4092__auto___14810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14797_14811__$1))
{var c__4015__auto___14812 = cljs.core.chunk_first.call(null,seq__14797_14811__$1);{
var G__14813 = cljs.core.chunk_rest.call(null,seq__14797_14811__$1);
var G__14814 = c__4015__auto___14812;
var G__14815 = cljs.core.count.call(null,c__4015__auto___14812);
var G__14816 = 0;
seq__14797_14801 = G__14813;
chunk__14798_14802 = G__14814;
count__14799_14803 = G__14815;
i__14800_14804 = G__14816;
continue;
}
} else
{var node_14817 = cljs.core.first.call(null,seq__14797_14811__$1);goog.dom.classes.toggle(node_14817,class$);
{
var G__14818 = cljs.core.next.call(null,seq__14797_14811__$1);
var G__14819 = null;
var G__14820 = 0;
var G__14821 = 0;
seq__14797_14801 = G__14818;
chunk__14798_14802 = G__14819;
count__14799_14803 = G__14820;
i__14800_14804 = G__14821;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_14830__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__14826_14831 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14827_14832 = null;var count__14828_14833 = 0;var i__14829_14834 = 0;while(true){
if((i__14829_14834 < count__14828_14833))
{var node_14835 = cljs.core._nth.call(null,chunk__14827_14832,i__14829_14834);goog.dom.classes.set(node_14835,classes_14830__$1);
{
var G__14836 = seq__14826_14831;
var G__14837 = chunk__14827_14832;
var G__14838 = count__14828_14833;
var G__14839 = (i__14829_14834 + 1);
seq__14826_14831 = G__14836;
chunk__14827_14832 = G__14837;
count__14828_14833 = G__14838;
i__14829_14834 = G__14839;
continue;
}
} else
{var temp__4092__auto___14840 = cljs.core.seq.call(null,seq__14826_14831);if(temp__4092__auto___14840)
{var seq__14826_14841__$1 = temp__4092__auto___14840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14826_14841__$1))
{var c__4015__auto___14842 = cljs.core.chunk_first.call(null,seq__14826_14841__$1);{
var G__14843 = cljs.core.chunk_rest.call(null,seq__14826_14841__$1);
var G__14844 = c__4015__auto___14842;
var G__14845 = cljs.core.count.call(null,c__4015__auto___14842);
var G__14846 = 0;
seq__14826_14831 = G__14843;
chunk__14827_14832 = G__14844;
count__14828_14833 = G__14845;
i__14829_14834 = G__14846;
continue;
}
} else
{var node_14847 = cljs.core.first.call(null,seq__14826_14841__$1);goog.dom.classes.set(node_14847,classes_14830__$1);
{
var G__14848 = cljs.core.next.call(null,seq__14826_14841__$1);
var G__14849 = null;
var G__14850 = 0;
var G__14851 = 0;
seq__14826_14831 = G__14848;
chunk__14827_14832 = G__14849;
count__14828_14833 = G__14850;
i__14829_14834 = G__14851;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__14856_14860 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14857_14861 = null;var count__14858_14862 = 0;var i__14859_14863 = 0;while(true){
if((i__14859_14863 < count__14858_14862))
{var node_14864 = cljs.core._nth.call(null,chunk__14857_14861,i__14859_14863);goog.dom.setTextContent(node_14864,value);
{
var G__14865 = seq__14856_14860;
var G__14866 = chunk__14857_14861;
var G__14867 = count__14858_14862;
var G__14868 = (i__14859_14863 + 1);
seq__14856_14860 = G__14865;
chunk__14857_14861 = G__14866;
count__14858_14862 = G__14867;
i__14859_14863 = G__14868;
continue;
}
} else
{var temp__4092__auto___14869 = cljs.core.seq.call(null,seq__14856_14860);if(temp__4092__auto___14869)
{var seq__14856_14870__$1 = temp__4092__auto___14869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14856_14870__$1))
{var c__4015__auto___14871 = cljs.core.chunk_first.call(null,seq__14856_14870__$1);{
var G__14872 = cljs.core.chunk_rest.call(null,seq__14856_14870__$1);
var G__14873 = c__4015__auto___14871;
var G__14874 = cljs.core.count.call(null,c__4015__auto___14871);
var G__14875 = 0;
seq__14856_14860 = G__14872;
chunk__14857_14861 = G__14873;
count__14858_14862 = G__14874;
i__14859_14863 = G__14875;
continue;
}
} else
{var node_14876 = cljs.core.first.call(null,seq__14856_14870__$1);goog.dom.setTextContent(node_14876,value);
{
var G__14877 = cljs.core.next.call(null,seq__14856_14870__$1);
var G__14878 = null;
var G__14879 = 0;
var G__14880 = 0;
seq__14856_14860 = G__14877;
chunk__14857_14861 = G__14878;
count__14858_14862 = G__14879;
i__14859_14863 = G__14880;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__14885_14889 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14886_14890 = null;var count__14887_14891 = 0;var i__14888_14892 = 0;while(true){
if((i__14888_14892 < count__14887_14891))
{var node_14893 = cljs.core._nth.call(null,chunk__14886_14890,i__14888_14892);goog.dom.forms.setValue(node_14893,value);
{
var G__14894 = seq__14885_14889;
var G__14895 = chunk__14886_14890;
var G__14896 = count__14887_14891;
var G__14897 = (i__14888_14892 + 1);
seq__14885_14889 = G__14894;
chunk__14886_14890 = G__14895;
count__14887_14891 = G__14896;
i__14888_14892 = G__14897;
continue;
}
} else
{var temp__4092__auto___14898 = cljs.core.seq.call(null,seq__14885_14889);if(temp__4092__auto___14898)
{var seq__14885_14899__$1 = temp__4092__auto___14898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14885_14899__$1))
{var c__4015__auto___14900 = cljs.core.chunk_first.call(null,seq__14885_14899__$1);{
var G__14901 = cljs.core.chunk_rest.call(null,seq__14885_14899__$1);
var G__14902 = c__4015__auto___14900;
var G__14903 = cljs.core.count.call(null,c__4015__auto___14900);
var G__14904 = 0;
seq__14885_14889 = G__14901;
chunk__14886_14890 = G__14902;
count__14887_14891 = G__14903;
i__14888_14892 = G__14904;
continue;
}
} else
{var node_14905 = cljs.core.first.call(null,seq__14885_14899__$1);goog.dom.forms.setValue(node_14905,value);
{
var G__14906 = cljs.core.next.call(null,seq__14885_14899__$1);
var G__14907 = null;
var G__14908 = 0;
var G__14909 = 0;
seq__14885_14889 = G__14906;
chunk__14886_14890 = G__14907;
count__14887_14891 = G__14908;
i__14888_14892 = G__14909;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_14920 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__14916_14921 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14917_14922 = null;var count__14918_14923 = 0;var i__14919_14924 = 0;while(true){
if((i__14919_14924 < count__14918_14923))
{var node_14925 = cljs.core._nth.call(null,chunk__14917_14922,i__14919_14924);node_14925.innerHTML = value_14920;
{
var G__14926 = seq__14916_14921;
var G__14927 = chunk__14917_14922;
var G__14928 = count__14918_14923;
var G__14929 = (i__14919_14924 + 1);
seq__14916_14921 = G__14926;
chunk__14917_14922 = G__14927;
count__14918_14923 = G__14928;
i__14919_14924 = G__14929;
continue;
}
} else
{var temp__4092__auto___14930 = cljs.core.seq.call(null,seq__14916_14921);if(temp__4092__auto___14930)
{var seq__14916_14931__$1 = temp__4092__auto___14930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14916_14931__$1))
{var c__4015__auto___14932 = cljs.core.chunk_first.call(null,seq__14916_14931__$1);{
var G__14933 = cljs.core.chunk_rest.call(null,seq__14916_14931__$1);
var G__14934 = c__4015__auto___14932;
var G__14935 = cljs.core.count.call(null,c__4015__auto___14932);
var G__14936 = 0;
seq__14916_14921 = G__14933;
chunk__14917_14922 = G__14934;
count__14918_14923 = G__14935;
i__14919_14924 = G__14936;
continue;
}
} else
{var node_14937 = cljs.core.first.call(null,seq__14916_14931__$1);node_14937.innerHTML = value_14920;
{
var G__14938 = cljs.core.next.call(null,seq__14916_14931__$1);
var G__14939 = null;
var G__14940 = 0;
var G__14941 = 0;
seq__14916_14921 = G__14938;
chunk__14917_14922 = G__14939;
count__14918_14923 = G__14940;
i__14919_14924 = G__14941;
continue;
}
}
} else
{}
}
break;
}
}catch (e14915){if((e14915 instanceof Error))
{var e_14942 = e14915;domina.replace_children_BANG_.call(null,content,value_14920);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14915;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__14949_14953 = cljs.core.seq.call(null,children);var chunk__14950_14954 = null;var count__14951_14955 = 0;var i__14952_14956 = 0;while(true){
if((i__14952_14956 < count__14951_14955))
{var child_14957 = cljs.core._nth.call(null,chunk__14950_14954,i__14952_14956);frag.appendChild(child_14957);
{
var G__14958 = seq__14949_14953;
var G__14959 = chunk__14950_14954;
var G__14960 = count__14951_14955;
var G__14961 = (i__14952_14956 + 1);
seq__14949_14953 = G__14958;
chunk__14950_14954 = G__14959;
count__14951_14955 = G__14960;
i__14952_14956 = G__14961;
continue;
}
} else
{var temp__4092__auto___14962 = cljs.core.seq.call(null,seq__14949_14953);if(temp__4092__auto___14962)
{var seq__14949_14963__$1 = temp__4092__auto___14962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14949_14963__$1))
{var c__4015__auto___14964 = cljs.core.chunk_first.call(null,seq__14949_14963__$1);{
var G__14965 = cljs.core.chunk_rest.call(null,seq__14949_14963__$1);
var G__14966 = c__4015__auto___14964;
var G__14967 = cljs.core.count.call(null,c__4015__auto___14964);
var G__14968 = 0;
seq__14949_14953 = G__14965;
chunk__14950_14954 = G__14966;
count__14951_14955 = G__14967;
i__14952_14956 = G__14968;
continue;
}
} else
{var child_14969 = cljs.core.first.call(null,seq__14949_14963__$1);frag.appendChild(child_14969);
{
var G__14970 = cljs.core.next.call(null,seq__14949_14963__$1);
var G__14971 = null;
var G__14972 = 0;
var G__14973 = 0;
seq__14949_14953 = G__14970;
chunk__14950_14954 = G__14971;
count__14951_14955 = G__14972;
i__14952_14956 = G__14973;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14943_SHARP_,p2__14944_SHARP_){return f.call(null,p1__14943_SHARP_,p2__14944_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__14975 = list_thing;if(G__14975)
{var bit__3917__auto__ = (G__14975.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__14975.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14975.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14975);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14975);
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
{if((function (){var G__14976 = content;if(G__14976)
{var bit__3917__auto__ = (G__14976.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__14976.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14976.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14976);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14976);
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
{if((function (){var G__14977 = content;if(G__14977)
{var bit__3917__auto__ = (G__14977.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__14977.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14977.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14977);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14977);
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
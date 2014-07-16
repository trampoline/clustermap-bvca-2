// Compiled by ClojureScript 0.0-2261
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
var opt_wrapper_18591 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_18592 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_18593 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18593,opt_wrapper_18591,table_section_wrapper_18592,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18591,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18592,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18592,cell_wrapper_18593,table_section_wrapper_18592,table_section_wrapper_18592]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__18598 = cljs.core.seq.call(null,tbody);var chunk__18599 = null;var count__18600 = (0);var i__18601 = (0);while(true){
if((i__18601 < count__18600))
{var child = cljs.core._nth.call(null,chunk__18599,i__18601);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18602 = seq__18598;
var G__18603 = chunk__18599;
var G__18604 = count__18600;
var G__18605 = (i__18601 + (1));
seq__18598 = G__18602;
chunk__18599 = G__18603;
count__18600 = G__18604;
i__18601 = G__18605;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18598);if(temp__4126__auto__)
{var seq__18598__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18598__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18598__$1);{
var G__18606 = cljs.core.chunk_rest.call(null,seq__18598__$1);
var G__18607 = c__4299__auto__;
var G__18608 = cljs.core.count.call(null,c__4299__auto__);
var G__18609 = (0);
seq__18598 = G__18606;
chunk__18599 = G__18607;
count__18600 = G__18608;
i__18601 = G__18609;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__18598__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18610 = cljs.core.next.call(null,seq__18598__$1);
var G__18611 = null;
var G__18612 = (0);
var G__18613 = (0);
seq__18598 = G__18610;
chunk__18599 = G__18611;
count__18600 = G__18612;
i__18601 = G__18613;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__18615 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__18615,(0),null);var start_wrap = cljs.core.nth.call(null,vec__18615,(1),null);var end_wrap = cljs.core.nth.call(null,vec__18615,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__18616 = wrapper.lastChild;
var G__18617 = (level - (1));
wrapper = G__18616;
level = G__18617;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj18619 = {};return obj18619;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__18620){
var mesg = cljs.core.seq(arglist__18620);
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
log.cljs$lang$applyTo = (function (arglist__18621){
var mesg = cljs.core.seq(arglist__18621);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__18622){
var contents = cljs.core.seq(arglist__18622);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__18623_SHARP_){return p1__18623_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__18624_SHARP_,p2__18625_SHARP_){return goog.dom.insertChildAt(p1__18624_SHARP_,p2__18625_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18627_SHARP_,p2__18626_SHARP_){return goog.dom.insertSiblingBefore(p2__18626_SHARP_,p1__18627_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18629_SHARP_,p2__18628_SHARP_){return goog.dom.insertSiblingAfter(p2__18628_SHARP_,p1__18629_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__18631_SHARP_,p2__18630_SHARP_){return goog.dom.replaceNode(p2__18630_SHARP_,p1__18631_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__18636_18640 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18637_18641 = null;var count__18638_18642 = (0);var i__18639_18643 = (0);while(true){
if((i__18639_18643 < count__18638_18642))
{var n_18644 = cljs.core._nth.call(null,chunk__18637_18641,i__18639_18643);goog.style.setStyle(n_18644,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18645 = seq__18636_18640;
var G__18646 = chunk__18637_18641;
var G__18647 = count__18638_18642;
var G__18648 = (i__18639_18643 + (1));
seq__18636_18640 = G__18645;
chunk__18637_18641 = G__18646;
count__18638_18642 = G__18647;
i__18639_18643 = G__18648;
continue;
}
} else
{var temp__4126__auto___18649 = cljs.core.seq.call(null,seq__18636_18640);if(temp__4126__auto___18649)
{var seq__18636_18650__$1 = temp__4126__auto___18649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18636_18650__$1))
{var c__4299__auto___18651 = cljs.core.chunk_first.call(null,seq__18636_18650__$1);{
var G__18652 = cljs.core.chunk_rest.call(null,seq__18636_18650__$1);
var G__18653 = c__4299__auto___18651;
var G__18654 = cljs.core.count.call(null,c__4299__auto___18651);
var G__18655 = (0);
seq__18636_18640 = G__18652;
chunk__18637_18641 = G__18653;
count__18638_18642 = G__18654;
i__18639_18643 = G__18655;
continue;
}
} else
{var n_18656 = cljs.core.first.call(null,seq__18636_18650__$1);goog.style.setStyle(n_18656,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18657 = cljs.core.next.call(null,seq__18636_18650__$1);
var G__18658 = null;
var G__18659 = (0);
var G__18660 = (0);
seq__18636_18640 = G__18657;
chunk__18637_18641 = G__18658;
count__18638_18642 = G__18659;
i__18639_18643 = G__18660;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18661){
var content = cljs.core.first(arglist__18661);
arglist__18661 = cljs.core.next(arglist__18661);
var name = cljs.core.first(arglist__18661);
var value = cljs.core.rest(arglist__18661);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__18666_18670 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18667_18671 = null;var count__18668_18672 = (0);var i__18669_18673 = (0);while(true){
if((i__18669_18673 < count__18668_18672))
{var n_18674 = cljs.core._nth.call(null,chunk__18667_18671,i__18669_18673);n_18674.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18675 = seq__18666_18670;
var G__18676 = chunk__18667_18671;
var G__18677 = count__18668_18672;
var G__18678 = (i__18669_18673 + (1));
seq__18666_18670 = G__18675;
chunk__18667_18671 = G__18676;
count__18668_18672 = G__18677;
i__18669_18673 = G__18678;
continue;
}
} else
{var temp__4126__auto___18679 = cljs.core.seq.call(null,seq__18666_18670);if(temp__4126__auto___18679)
{var seq__18666_18680__$1 = temp__4126__auto___18679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18666_18680__$1))
{var c__4299__auto___18681 = cljs.core.chunk_first.call(null,seq__18666_18680__$1);{
var G__18682 = cljs.core.chunk_rest.call(null,seq__18666_18680__$1);
var G__18683 = c__4299__auto___18681;
var G__18684 = cljs.core.count.call(null,c__4299__auto___18681);
var G__18685 = (0);
seq__18666_18670 = G__18682;
chunk__18667_18671 = G__18683;
count__18668_18672 = G__18684;
i__18669_18673 = G__18685;
continue;
}
} else
{var n_18686 = cljs.core.first.call(null,seq__18666_18680__$1);n_18686.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18687 = cljs.core.next.call(null,seq__18666_18680__$1);
var G__18688 = null;
var G__18689 = (0);
var G__18690 = (0);
seq__18666_18670 = G__18687;
chunk__18667_18671 = G__18688;
count__18668_18672 = G__18689;
i__18669_18673 = G__18690;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__18691){
var content = cljs.core.first(arglist__18691);
arglist__18691 = cljs.core.next(arglist__18691);
var name = cljs.core.first(arglist__18691);
var value = cljs.core.rest(arglist__18691);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__18696_18700 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18697_18701 = null;var count__18698_18702 = (0);var i__18699_18703 = (0);while(true){
if((i__18699_18703 < count__18698_18702))
{var n_18704 = cljs.core._nth.call(null,chunk__18697_18701,i__18699_18703);n_18704.removeAttribute(cljs.core.name.call(null,name));
{
var G__18705 = seq__18696_18700;
var G__18706 = chunk__18697_18701;
var G__18707 = count__18698_18702;
var G__18708 = (i__18699_18703 + (1));
seq__18696_18700 = G__18705;
chunk__18697_18701 = G__18706;
count__18698_18702 = G__18707;
i__18699_18703 = G__18708;
continue;
}
} else
{var temp__4126__auto___18709 = cljs.core.seq.call(null,seq__18696_18700);if(temp__4126__auto___18709)
{var seq__18696_18710__$1 = temp__4126__auto___18709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18696_18710__$1))
{var c__4299__auto___18711 = cljs.core.chunk_first.call(null,seq__18696_18710__$1);{
var G__18712 = cljs.core.chunk_rest.call(null,seq__18696_18710__$1);
var G__18713 = c__4299__auto___18711;
var G__18714 = cljs.core.count.call(null,c__4299__auto___18711);
var G__18715 = (0);
seq__18696_18700 = G__18712;
chunk__18697_18701 = G__18713;
count__18698_18702 = G__18714;
i__18699_18703 = G__18715;
continue;
}
} else
{var n_18716 = cljs.core.first.call(null,seq__18696_18710__$1);n_18716.removeAttribute(cljs.core.name.call(null,name));
{
var G__18717 = cljs.core.next.call(null,seq__18696_18710__$1);
var G__18718 = null;
var G__18719 = (0);
var G__18720 = (0);
seq__18696_18700 = G__18717;
chunk__18697_18701 = G__18718;
count__18698_18702 = G__18719;
i__18699_18703 = G__18720;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__18722 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__18722,(0),null);var v = cljs.core.nth.call(null,vec__18722,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
return (function (p1__18723_SHARP_){var attr = attrs__$1.item(p1__18723_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__18730_18736 = cljs.core.seq.call(null,styles);var chunk__18731_18737 = null;var count__18732_18738 = (0);var i__18733_18739 = (0);while(true){
if((i__18733_18739 < count__18732_18738))
{var vec__18734_18740 = cljs.core._nth.call(null,chunk__18731_18737,i__18733_18739);var name_18741 = cljs.core.nth.call(null,vec__18734_18740,(0),null);var value_18742 = cljs.core.nth.call(null,vec__18734_18740,(1),null);domina.set_style_BANG_.call(null,content,name_18741,value_18742);
{
var G__18743 = seq__18730_18736;
var G__18744 = chunk__18731_18737;
var G__18745 = count__18732_18738;
var G__18746 = (i__18733_18739 + (1));
seq__18730_18736 = G__18743;
chunk__18731_18737 = G__18744;
count__18732_18738 = G__18745;
i__18733_18739 = G__18746;
continue;
}
} else
{var temp__4126__auto___18747 = cljs.core.seq.call(null,seq__18730_18736);if(temp__4126__auto___18747)
{var seq__18730_18748__$1 = temp__4126__auto___18747;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18730_18748__$1))
{var c__4299__auto___18749 = cljs.core.chunk_first.call(null,seq__18730_18748__$1);{
var G__18750 = cljs.core.chunk_rest.call(null,seq__18730_18748__$1);
var G__18751 = c__4299__auto___18749;
var G__18752 = cljs.core.count.call(null,c__4299__auto___18749);
var G__18753 = (0);
seq__18730_18736 = G__18750;
chunk__18731_18737 = G__18751;
count__18732_18738 = G__18752;
i__18733_18739 = G__18753;
continue;
}
} else
{var vec__18735_18754 = cljs.core.first.call(null,seq__18730_18748__$1);var name_18755 = cljs.core.nth.call(null,vec__18735_18754,(0),null);var value_18756 = cljs.core.nth.call(null,vec__18735_18754,(1),null);domina.set_style_BANG_.call(null,content,name_18755,value_18756);
{
var G__18757 = cljs.core.next.call(null,seq__18730_18748__$1);
var G__18758 = null;
var G__18759 = (0);
var G__18760 = (0);
seq__18730_18736 = G__18757;
chunk__18731_18737 = G__18758;
count__18732_18738 = G__18759;
i__18733_18739 = G__18760;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__18767_18773 = cljs.core.seq.call(null,attrs);var chunk__18768_18774 = null;var count__18769_18775 = (0);var i__18770_18776 = (0);while(true){
if((i__18770_18776 < count__18769_18775))
{var vec__18771_18777 = cljs.core._nth.call(null,chunk__18768_18774,i__18770_18776);var name_18778 = cljs.core.nth.call(null,vec__18771_18777,(0),null);var value_18779 = cljs.core.nth.call(null,vec__18771_18777,(1),null);domina.set_attr_BANG_.call(null,content,name_18778,value_18779);
{
var G__18780 = seq__18767_18773;
var G__18781 = chunk__18768_18774;
var G__18782 = count__18769_18775;
var G__18783 = (i__18770_18776 + (1));
seq__18767_18773 = G__18780;
chunk__18768_18774 = G__18781;
count__18769_18775 = G__18782;
i__18770_18776 = G__18783;
continue;
}
} else
{var temp__4126__auto___18784 = cljs.core.seq.call(null,seq__18767_18773);if(temp__4126__auto___18784)
{var seq__18767_18785__$1 = temp__4126__auto___18784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18767_18785__$1))
{var c__4299__auto___18786 = cljs.core.chunk_first.call(null,seq__18767_18785__$1);{
var G__18787 = cljs.core.chunk_rest.call(null,seq__18767_18785__$1);
var G__18788 = c__4299__auto___18786;
var G__18789 = cljs.core.count.call(null,c__4299__auto___18786);
var G__18790 = (0);
seq__18767_18773 = G__18787;
chunk__18768_18774 = G__18788;
count__18769_18775 = G__18789;
i__18770_18776 = G__18790;
continue;
}
} else
{var vec__18772_18791 = cljs.core.first.call(null,seq__18767_18785__$1);var name_18792 = cljs.core.nth.call(null,vec__18772_18791,(0),null);var value_18793 = cljs.core.nth.call(null,vec__18772_18791,(1),null);domina.set_attr_BANG_.call(null,content,name_18792,value_18793);
{
var G__18794 = cljs.core.next.call(null,seq__18767_18785__$1);
var G__18795 = null;
var G__18796 = (0);
var G__18797 = (0);
seq__18767_18773 = G__18794;
chunk__18768_18774 = G__18795;
count__18769_18775 = G__18796;
i__18770_18776 = G__18797;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__18802_18806 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18803_18807 = null;var count__18804_18808 = (0);var i__18805_18809 = (0);while(true){
if((i__18805_18809 < count__18804_18808))
{var node_18810 = cljs.core._nth.call(null,chunk__18803_18807,i__18805_18809);goog.dom.classes.add(node_18810,class$);
{
var G__18811 = seq__18802_18806;
var G__18812 = chunk__18803_18807;
var G__18813 = count__18804_18808;
var G__18814 = (i__18805_18809 + (1));
seq__18802_18806 = G__18811;
chunk__18803_18807 = G__18812;
count__18804_18808 = G__18813;
i__18805_18809 = G__18814;
continue;
}
} else
{var temp__4126__auto___18815 = cljs.core.seq.call(null,seq__18802_18806);if(temp__4126__auto___18815)
{var seq__18802_18816__$1 = temp__4126__auto___18815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18802_18816__$1))
{var c__4299__auto___18817 = cljs.core.chunk_first.call(null,seq__18802_18816__$1);{
var G__18818 = cljs.core.chunk_rest.call(null,seq__18802_18816__$1);
var G__18819 = c__4299__auto___18817;
var G__18820 = cljs.core.count.call(null,c__4299__auto___18817);
var G__18821 = (0);
seq__18802_18806 = G__18818;
chunk__18803_18807 = G__18819;
count__18804_18808 = G__18820;
i__18805_18809 = G__18821;
continue;
}
} else
{var node_18822 = cljs.core.first.call(null,seq__18802_18816__$1);goog.dom.classes.add(node_18822,class$);
{
var G__18823 = cljs.core.next.call(null,seq__18802_18816__$1);
var G__18824 = null;
var G__18825 = (0);
var G__18826 = (0);
seq__18802_18806 = G__18823;
chunk__18803_18807 = G__18824;
count__18804_18808 = G__18825;
i__18805_18809 = G__18826;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__18831_18835 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18832_18836 = null;var count__18833_18837 = (0);var i__18834_18838 = (0);while(true){
if((i__18834_18838 < count__18833_18837))
{var node_18839 = cljs.core._nth.call(null,chunk__18832_18836,i__18834_18838);goog.dom.classes.remove(node_18839,class$);
{
var G__18840 = seq__18831_18835;
var G__18841 = chunk__18832_18836;
var G__18842 = count__18833_18837;
var G__18843 = (i__18834_18838 + (1));
seq__18831_18835 = G__18840;
chunk__18832_18836 = G__18841;
count__18833_18837 = G__18842;
i__18834_18838 = G__18843;
continue;
}
} else
{var temp__4126__auto___18844 = cljs.core.seq.call(null,seq__18831_18835);if(temp__4126__auto___18844)
{var seq__18831_18845__$1 = temp__4126__auto___18844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18831_18845__$1))
{var c__4299__auto___18846 = cljs.core.chunk_first.call(null,seq__18831_18845__$1);{
var G__18847 = cljs.core.chunk_rest.call(null,seq__18831_18845__$1);
var G__18848 = c__4299__auto___18846;
var G__18849 = cljs.core.count.call(null,c__4299__auto___18846);
var G__18850 = (0);
seq__18831_18835 = G__18847;
chunk__18832_18836 = G__18848;
count__18833_18837 = G__18849;
i__18834_18838 = G__18850;
continue;
}
} else
{var node_18851 = cljs.core.first.call(null,seq__18831_18845__$1);goog.dom.classes.remove(node_18851,class$);
{
var G__18852 = cljs.core.next.call(null,seq__18831_18845__$1);
var G__18853 = null;
var G__18854 = (0);
var G__18855 = (0);
seq__18831_18835 = G__18852;
chunk__18832_18836 = G__18853;
count__18833_18837 = G__18854;
i__18834_18838 = G__18855;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__18860_18864 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18861_18865 = null;var count__18862_18866 = (0);var i__18863_18867 = (0);while(true){
if((i__18863_18867 < count__18862_18866))
{var node_18868 = cljs.core._nth.call(null,chunk__18861_18865,i__18863_18867);goog.dom.classes.toggle(node_18868,class$);
{
var G__18869 = seq__18860_18864;
var G__18870 = chunk__18861_18865;
var G__18871 = count__18862_18866;
var G__18872 = (i__18863_18867 + (1));
seq__18860_18864 = G__18869;
chunk__18861_18865 = G__18870;
count__18862_18866 = G__18871;
i__18863_18867 = G__18872;
continue;
}
} else
{var temp__4126__auto___18873 = cljs.core.seq.call(null,seq__18860_18864);if(temp__4126__auto___18873)
{var seq__18860_18874__$1 = temp__4126__auto___18873;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18860_18874__$1))
{var c__4299__auto___18875 = cljs.core.chunk_first.call(null,seq__18860_18874__$1);{
var G__18876 = cljs.core.chunk_rest.call(null,seq__18860_18874__$1);
var G__18877 = c__4299__auto___18875;
var G__18878 = cljs.core.count.call(null,c__4299__auto___18875);
var G__18879 = (0);
seq__18860_18864 = G__18876;
chunk__18861_18865 = G__18877;
count__18862_18866 = G__18878;
i__18863_18867 = G__18879;
continue;
}
} else
{var node_18880 = cljs.core.first.call(null,seq__18860_18874__$1);goog.dom.classes.toggle(node_18880,class$);
{
var G__18881 = cljs.core.next.call(null,seq__18860_18874__$1);
var G__18882 = null;
var G__18883 = (0);
var G__18884 = (0);
seq__18860_18864 = G__18881;
chunk__18861_18865 = G__18882;
count__18862_18866 = G__18883;
i__18863_18867 = G__18884;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_18893__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__18889_18894 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18890_18895 = null;var count__18891_18896 = (0);var i__18892_18897 = (0);while(true){
if((i__18892_18897 < count__18891_18896))
{var node_18898 = cljs.core._nth.call(null,chunk__18890_18895,i__18892_18897);goog.dom.classes.set(node_18898,classes_18893__$1);
{
var G__18899 = seq__18889_18894;
var G__18900 = chunk__18890_18895;
var G__18901 = count__18891_18896;
var G__18902 = (i__18892_18897 + (1));
seq__18889_18894 = G__18899;
chunk__18890_18895 = G__18900;
count__18891_18896 = G__18901;
i__18892_18897 = G__18902;
continue;
}
} else
{var temp__4126__auto___18903 = cljs.core.seq.call(null,seq__18889_18894);if(temp__4126__auto___18903)
{var seq__18889_18904__$1 = temp__4126__auto___18903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18889_18904__$1))
{var c__4299__auto___18905 = cljs.core.chunk_first.call(null,seq__18889_18904__$1);{
var G__18906 = cljs.core.chunk_rest.call(null,seq__18889_18904__$1);
var G__18907 = c__4299__auto___18905;
var G__18908 = cljs.core.count.call(null,c__4299__auto___18905);
var G__18909 = (0);
seq__18889_18894 = G__18906;
chunk__18890_18895 = G__18907;
count__18891_18896 = G__18908;
i__18892_18897 = G__18909;
continue;
}
} else
{var node_18910 = cljs.core.first.call(null,seq__18889_18904__$1);goog.dom.classes.set(node_18910,classes_18893__$1);
{
var G__18911 = cljs.core.next.call(null,seq__18889_18904__$1);
var G__18912 = null;
var G__18913 = (0);
var G__18914 = (0);
seq__18889_18894 = G__18911;
chunk__18890_18895 = G__18912;
count__18891_18896 = G__18913;
i__18892_18897 = G__18914;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__18919_18923 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18920_18924 = null;var count__18921_18925 = (0);var i__18922_18926 = (0);while(true){
if((i__18922_18926 < count__18921_18925))
{var node_18927 = cljs.core._nth.call(null,chunk__18920_18924,i__18922_18926);goog.dom.setTextContent(node_18927,value);
{
var G__18928 = seq__18919_18923;
var G__18929 = chunk__18920_18924;
var G__18930 = count__18921_18925;
var G__18931 = (i__18922_18926 + (1));
seq__18919_18923 = G__18928;
chunk__18920_18924 = G__18929;
count__18921_18925 = G__18930;
i__18922_18926 = G__18931;
continue;
}
} else
{var temp__4126__auto___18932 = cljs.core.seq.call(null,seq__18919_18923);if(temp__4126__auto___18932)
{var seq__18919_18933__$1 = temp__4126__auto___18932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18919_18933__$1))
{var c__4299__auto___18934 = cljs.core.chunk_first.call(null,seq__18919_18933__$1);{
var G__18935 = cljs.core.chunk_rest.call(null,seq__18919_18933__$1);
var G__18936 = c__4299__auto___18934;
var G__18937 = cljs.core.count.call(null,c__4299__auto___18934);
var G__18938 = (0);
seq__18919_18923 = G__18935;
chunk__18920_18924 = G__18936;
count__18921_18925 = G__18937;
i__18922_18926 = G__18938;
continue;
}
} else
{var node_18939 = cljs.core.first.call(null,seq__18919_18933__$1);goog.dom.setTextContent(node_18939,value);
{
var G__18940 = cljs.core.next.call(null,seq__18919_18933__$1);
var G__18941 = null;
var G__18942 = (0);
var G__18943 = (0);
seq__18919_18923 = G__18940;
chunk__18920_18924 = G__18941;
count__18921_18925 = G__18942;
i__18922_18926 = G__18943;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__18948_18952 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18949_18953 = null;var count__18950_18954 = (0);var i__18951_18955 = (0);while(true){
if((i__18951_18955 < count__18950_18954))
{var node_18956 = cljs.core._nth.call(null,chunk__18949_18953,i__18951_18955);goog.dom.forms.setValue(node_18956,value);
{
var G__18957 = seq__18948_18952;
var G__18958 = chunk__18949_18953;
var G__18959 = count__18950_18954;
var G__18960 = (i__18951_18955 + (1));
seq__18948_18952 = G__18957;
chunk__18949_18953 = G__18958;
count__18950_18954 = G__18959;
i__18951_18955 = G__18960;
continue;
}
} else
{var temp__4126__auto___18961 = cljs.core.seq.call(null,seq__18948_18952);if(temp__4126__auto___18961)
{var seq__18948_18962__$1 = temp__4126__auto___18961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18948_18962__$1))
{var c__4299__auto___18963 = cljs.core.chunk_first.call(null,seq__18948_18962__$1);{
var G__18964 = cljs.core.chunk_rest.call(null,seq__18948_18962__$1);
var G__18965 = c__4299__auto___18963;
var G__18966 = cljs.core.count.call(null,c__4299__auto___18963);
var G__18967 = (0);
seq__18948_18952 = G__18964;
chunk__18949_18953 = G__18965;
count__18950_18954 = G__18966;
i__18951_18955 = G__18967;
continue;
}
} else
{var node_18968 = cljs.core.first.call(null,seq__18948_18962__$1);goog.dom.forms.setValue(node_18968,value);
{
var G__18969 = cljs.core.next.call(null,seq__18948_18962__$1);
var G__18970 = null;
var G__18971 = (0);
var G__18972 = (0);
seq__18948_18952 = G__18969;
chunk__18949_18953 = G__18970;
count__18950_18954 = G__18971;
i__18951_18955 = G__18972;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_18983 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__18979_18984 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18980_18985 = null;var count__18981_18986 = (0);var i__18982_18987 = (0);while(true){
if((i__18982_18987 < count__18981_18986))
{var node_18988 = cljs.core._nth.call(null,chunk__18980_18985,i__18982_18987);node_18988.innerHTML = value_18983;
{
var G__18989 = seq__18979_18984;
var G__18990 = chunk__18980_18985;
var G__18991 = count__18981_18986;
var G__18992 = (i__18982_18987 + (1));
seq__18979_18984 = G__18989;
chunk__18980_18985 = G__18990;
count__18981_18986 = G__18991;
i__18982_18987 = G__18992;
continue;
}
} else
{var temp__4126__auto___18993 = cljs.core.seq.call(null,seq__18979_18984);if(temp__4126__auto___18993)
{var seq__18979_18994__$1 = temp__4126__auto___18993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18979_18994__$1))
{var c__4299__auto___18995 = cljs.core.chunk_first.call(null,seq__18979_18994__$1);{
var G__18996 = cljs.core.chunk_rest.call(null,seq__18979_18994__$1);
var G__18997 = c__4299__auto___18995;
var G__18998 = cljs.core.count.call(null,c__4299__auto___18995);
var G__18999 = (0);
seq__18979_18984 = G__18996;
chunk__18980_18985 = G__18997;
count__18981_18986 = G__18998;
i__18982_18987 = G__18999;
continue;
}
} else
{var node_19000 = cljs.core.first.call(null,seq__18979_18994__$1);node_19000.innerHTML = value_18983;
{
var G__19001 = cljs.core.next.call(null,seq__18979_18994__$1);
var G__19002 = null;
var G__19003 = (0);
var G__19004 = (0);
seq__18979_18984 = G__19001;
chunk__18980_18985 = G__19002;
count__18981_18986 = G__19003;
i__18982_18987 = G__19004;
continue;
}
}
} else
{}
}
break;
}
}catch (e18978){if((e18978 instanceof Error))
{var e_19005 = e18978;domina.replace_children_BANG_.call(null,content,value_18983);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18978;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19012_19016 = cljs.core.seq.call(null,children);var chunk__19013_19017 = null;var count__19014_19018 = (0);var i__19015_19019 = (0);while(true){
if((i__19015_19019 < count__19014_19018))
{var child_19020 = cljs.core._nth.call(null,chunk__19013_19017,i__19015_19019);frag.appendChild(child_19020);
{
var G__19021 = seq__19012_19016;
var G__19022 = chunk__19013_19017;
var G__19023 = count__19014_19018;
var G__19024 = (i__19015_19019 + (1));
seq__19012_19016 = G__19021;
chunk__19013_19017 = G__19022;
count__19014_19018 = G__19023;
i__19015_19019 = G__19024;
continue;
}
} else
{var temp__4126__auto___19025 = cljs.core.seq.call(null,seq__19012_19016);if(temp__4126__auto___19025)
{var seq__19012_19026__$1 = temp__4126__auto___19025;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19012_19026__$1))
{var c__4299__auto___19027 = cljs.core.chunk_first.call(null,seq__19012_19026__$1);{
var G__19028 = cljs.core.chunk_rest.call(null,seq__19012_19026__$1);
var G__19029 = c__4299__auto___19027;
var G__19030 = cljs.core.count.call(null,c__4299__auto___19027);
var G__19031 = (0);
seq__19012_19016 = G__19028;
chunk__19013_19017 = G__19029;
count__19014_19018 = G__19030;
i__19015_19019 = G__19031;
continue;
}
} else
{var child_19032 = cljs.core.first.call(null,seq__19012_19026__$1);frag.appendChild(child_19032);
{
var G__19033 = cljs.core.next.call(null,seq__19012_19026__$1);
var G__19034 = null;
var G__19035 = (0);
var G__19036 = (0);
seq__19012_19016 = G__19033;
chunk__19013_19017 = G__19034;
count__19014_19018 = G__19035;
i__19015_19019 = G__19036;
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
return (function (p1__19006_SHARP_,p2__19007_SHARP_){return f.call(null,p1__19006_SHARP_,p2__19007_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__19038 = list_thing;if(G__19038)
{var bit__4193__auto__ = (G__19038.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19038.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19038.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19038);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19038);
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
{if((function (){var G__19039 = content;if(G__19039)
{var bit__4193__auto__ = (G__19039.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19039.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19039.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19039);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19039);
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
{if((function (){var G__19040 = content;if(G__19040)
{var bit__4193__auto__ = (G__19040.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19040.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19040.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19040);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19040);
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

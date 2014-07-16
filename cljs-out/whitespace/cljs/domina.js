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
var opt_wrapper_18650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_18651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_18652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18652,opt_wrapper_18650,table_section_wrapper_18651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18651,cell_wrapper_18652,table_section_wrapper_18651,table_section_wrapper_18651]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__18657 = cljs.core.seq.call(null,tbody);var chunk__18658 = null;var count__18659 = (0);var i__18660 = (0);while(true){
if((i__18660 < count__18659))
{var child = cljs.core._nth.call(null,chunk__18658,i__18660);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18661 = seq__18657;
var G__18662 = chunk__18658;
var G__18663 = count__18659;
var G__18664 = (i__18660 + (1));
seq__18657 = G__18661;
chunk__18658 = G__18662;
count__18659 = G__18663;
i__18660 = G__18664;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18657);if(temp__4126__auto__)
{var seq__18657__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18657__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18657__$1);{
var G__18665 = cljs.core.chunk_rest.call(null,seq__18657__$1);
var G__18666 = c__4299__auto__;
var G__18667 = cljs.core.count.call(null,c__4299__auto__);
var G__18668 = (0);
seq__18657 = G__18665;
chunk__18658 = G__18666;
count__18659 = G__18667;
i__18660 = G__18668;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__18657__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18669 = cljs.core.next.call(null,seq__18657__$1);
var G__18670 = null;
var G__18671 = (0);
var G__18672 = (0);
seq__18657 = G__18669;
chunk__18658 = G__18670;
count__18659 = G__18671;
i__18660 = G__18672;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__18674 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__18674,(0),null);var start_wrap = cljs.core.nth.call(null,vec__18674,(1),null);var end_wrap = cljs.core.nth.call(null,vec__18674,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__18675 = wrapper.lastChild;
var G__18676 = (level - (1));
wrapper = G__18675;
level = G__18676;
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
domina.DomContent = (function (){var obj18678 = {};return obj18678;
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
log_debug.cljs$lang$applyTo = (function (arglist__18679){
var mesg = cljs.core.seq(arglist__18679);
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
log.cljs$lang$applyTo = (function (arglist__18680){
var mesg = cljs.core.seq(arglist__18680);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__18681){
var contents = cljs.core.seq(arglist__18681);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__18682_SHARP_){return p1__18682_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__18683_SHARP_,p2__18684_SHARP_){return goog.dom.insertChildAt(p1__18683_SHARP_,p2__18684_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18686_SHARP_,p2__18685_SHARP_){return goog.dom.insertSiblingBefore(p2__18685_SHARP_,p1__18686_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18688_SHARP_,p2__18687_SHARP_){return goog.dom.insertSiblingAfter(p2__18687_SHARP_,p1__18688_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__18690_SHARP_,p2__18689_SHARP_){return goog.dom.replaceNode(p2__18689_SHARP_,p1__18690_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__18695_18699 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18696_18700 = null;var count__18697_18701 = (0);var i__18698_18702 = (0);while(true){
if((i__18698_18702 < count__18697_18701))
{var n_18703 = cljs.core._nth.call(null,chunk__18696_18700,i__18698_18702);goog.style.setStyle(n_18703,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18704 = seq__18695_18699;
var G__18705 = chunk__18696_18700;
var G__18706 = count__18697_18701;
var G__18707 = (i__18698_18702 + (1));
seq__18695_18699 = G__18704;
chunk__18696_18700 = G__18705;
count__18697_18701 = G__18706;
i__18698_18702 = G__18707;
continue;
}
} else
{var temp__4126__auto___18708 = cljs.core.seq.call(null,seq__18695_18699);if(temp__4126__auto___18708)
{var seq__18695_18709__$1 = temp__4126__auto___18708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18695_18709__$1))
{var c__4299__auto___18710 = cljs.core.chunk_first.call(null,seq__18695_18709__$1);{
var G__18711 = cljs.core.chunk_rest.call(null,seq__18695_18709__$1);
var G__18712 = c__4299__auto___18710;
var G__18713 = cljs.core.count.call(null,c__4299__auto___18710);
var G__18714 = (0);
seq__18695_18699 = G__18711;
chunk__18696_18700 = G__18712;
count__18697_18701 = G__18713;
i__18698_18702 = G__18714;
continue;
}
} else
{var n_18715 = cljs.core.first.call(null,seq__18695_18709__$1);goog.style.setStyle(n_18715,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18716 = cljs.core.next.call(null,seq__18695_18709__$1);
var G__18717 = null;
var G__18718 = (0);
var G__18719 = (0);
seq__18695_18699 = G__18716;
chunk__18696_18700 = G__18717;
count__18697_18701 = G__18718;
i__18698_18702 = G__18719;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18720){
var content = cljs.core.first(arglist__18720);
arglist__18720 = cljs.core.next(arglist__18720);
var name = cljs.core.first(arglist__18720);
var value = cljs.core.rest(arglist__18720);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__18725_18729 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18726_18730 = null;var count__18727_18731 = (0);var i__18728_18732 = (0);while(true){
if((i__18728_18732 < count__18727_18731))
{var n_18733 = cljs.core._nth.call(null,chunk__18726_18730,i__18728_18732);n_18733.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18734 = seq__18725_18729;
var G__18735 = chunk__18726_18730;
var G__18736 = count__18727_18731;
var G__18737 = (i__18728_18732 + (1));
seq__18725_18729 = G__18734;
chunk__18726_18730 = G__18735;
count__18727_18731 = G__18736;
i__18728_18732 = G__18737;
continue;
}
} else
{var temp__4126__auto___18738 = cljs.core.seq.call(null,seq__18725_18729);if(temp__4126__auto___18738)
{var seq__18725_18739__$1 = temp__4126__auto___18738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18725_18739__$1))
{var c__4299__auto___18740 = cljs.core.chunk_first.call(null,seq__18725_18739__$1);{
var G__18741 = cljs.core.chunk_rest.call(null,seq__18725_18739__$1);
var G__18742 = c__4299__auto___18740;
var G__18743 = cljs.core.count.call(null,c__4299__auto___18740);
var G__18744 = (0);
seq__18725_18729 = G__18741;
chunk__18726_18730 = G__18742;
count__18727_18731 = G__18743;
i__18728_18732 = G__18744;
continue;
}
} else
{var n_18745 = cljs.core.first.call(null,seq__18725_18739__$1);n_18745.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18746 = cljs.core.next.call(null,seq__18725_18739__$1);
var G__18747 = null;
var G__18748 = (0);
var G__18749 = (0);
seq__18725_18729 = G__18746;
chunk__18726_18730 = G__18747;
count__18727_18731 = G__18748;
i__18728_18732 = G__18749;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__18750){
var content = cljs.core.first(arglist__18750);
arglist__18750 = cljs.core.next(arglist__18750);
var name = cljs.core.first(arglist__18750);
var value = cljs.core.rest(arglist__18750);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__18755_18759 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18756_18760 = null;var count__18757_18761 = (0);var i__18758_18762 = (0);while(true){
if((i__18758_18762 < count__18757_18761))
{var n_18763 = cljs.core._nth.call(null,chunk__18756_18760,i__18758_18762);n_18763.removeAttribute(cljs.core.name.call(null,name));
{
var G__18764 = seq__18755_18759;
var G__18765 = chunk__18756_18760;
var G__18766 = count__18757_18761;
var G__18767 = (i__18758_18762 + (1));
seq__18755_18759 = G__18764;
chunk__18756_18760 = G__18765;
count__18757_18761 = G__18766;
i__18758_18762 = G__18767;
continue;
}
} else
{var temp__4126__auto___18768 = cljs.core.seq.call(null,seq__18755_18759);if(temp__4126__auto___18768)
{var seq__18755_18769__$1 = temp__4126__auto___18768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18755_18769__$1))
{var c__4299__auto___18770 = cljs.core.chunk_first.call(null,seq__18755_18769__$1);{
var G__18771 = cljs.core.chunk_rest.call(null,seq__18755_18769__$1);
var G__18772 = c__4299__auto___18770;
var G__18773 = cljs.core.count.call(null,c__4299__auto___18770);
var G__18774 = (0);
seq__18755_18759 = G__18771;
chunk__18756_18760 = G__18772;
count__18757_18761 = G__18773;
i__18758_18762 = G__18774;
continue;
}
} else
{var n_18775 = cljs.core.first.call(null,seq__18755_18769__$1);n_18775.removeAttribute(cljs.core.name.call(null,name));
{
var G__18776 = cljs.core.next.call(null,seq__18755_18769__$1);
var G__18777 = null;
var G__18778 = (0);
var G__18779 = (0);
seq__18755_18759 = G__18776;
chunk__18756_18760 = G__18777;
count__18757_18761 = G__18778;
i__18758_18762 = G__18779;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__18781 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__18781,(0),null);var v = cljs.core.nth.call(null,vec__18781,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__18782_SHARP_){var attr = attrs__$1.item(p1__18782_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__18789_18795 = cljs.core.seq.call(null,styles);var chunk__18790_18796 = null;var count__18791_18797 = (0);var i__18792_18798 = (0);while(true){
if((i__18792_18798 < count__18791_18797))
{var vec__18793_18799 = cljs.core._nth.call(null,chunk__18790_18796,i__18792_18798);var name_18800 = cljs.core.nth.call(null,vec__18793_18799,(0),null);var value_18801 = cljs.core.nth.call(null,vec__18793_18799,(1),null);domina.set_style_BANG_.call(null,content,name_18800,value_18801);
{
var G__18802 = seq__18789_18795;
var G__18803 = chunk__18790_18796;
var G__18804 = count__18791_18797;
var G__18805 = (i__18792_18798 + (1));
seq__18789_18795 = G__18802;
chunk__18790_18796 = G__18803;
count__18791_18797 = G__18804;
i__18792_18798 = G__18805;
continue;
}
} else
{var temp__4126__auto___18806 = cljs.core.seq.call(null,seq__18789_18795);if(temp__4126__auto___18806)
{var seq__18789_18807__$1 = temp__4126__auto___18806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18789_18807__$1))
{var c__4299__auto___18808 = cljs.core.chunk_first.call(null,seq__18789_18807__$1);{
var G__18809 = cljs.core.chunk_rest.call(null,seq__18789_18807__$1);
var G__18810 = c__4299__auto___18808;
var G__18811 = cljs.core.count.call(null,c__4299__auto___18808);
var G__18812 = (0);
seq__18789_18795 = G__18809;
chunk__18790_18796 = G__18810;
count__18791_18797 = G__18811;
i__18792_18798 = G__18812;
continue;
}
} else
{var vec__18794_18813 = cljs.core.first.call(null,seq__18789_18807__$1);var name_18814 = cljs.core.nth.call(null,vec__18794_18813,(0),null);var value_18815 = cljs.core.nth.call(null,vec__18794_18813,(1),null);domina.set_style_BANG_.call(null,content,name_18814,value_18815);
{
var G__18816 = cljs.core.next.call(null,seq__18789_18807__$1);
var G__18817 = null;
var G__18818 = (0);
var G__18819 = (0);
seq__18789_18795 = G__18816;
chunk__18790_18796 = G__18817;
count__18791_18797 = G__18818;
i__18792_18798 = G__18819;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__18826_18832 = cljs.core.seq.call(null,attrs);var chunk__18827_18833 = null;var count__18828_18834 = (0);var i__18829_18835 = (0);while(true){
if((i__18829_18835 < count__18828_18834))
{var vec__18830_18836 = cljs.core._nth.call(null,chunk__18827_18833,i__18829_18835);var name_18837 = cljs.core.nth.call(null,vec__18830_18836,(0),null);var value_18838 = cljs.core.nth.call(null,vec__18830_18836,(1),null);domina.set_attr_BANG_.call(null,content,name_18837,value_18838);
{
var G__18839 = seq__18826_18832;
var G__18840 = chunk__18827_18833;
var G__18841 = count__18828_18834;
var G__18842 = (i__18829_18835 + (1));
seq__18826_18832 = G__18839;
chunk__18827_18833 = G__18840;
count__18828_18834 = G__18841;
i__18829_18835 = G__18842;
continue;
}
} else
{var temp__4126__auto___18843 = cljs.core.seq.call(null,seq__18826_18832);if(temp__4126__auto___18843)
{var seq__18826_18844__$1 = temp__4126__auto___18843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18826_18844__$1))
{var c__4299__auto___18845 = cljs.core.chunk_first.call(null,seq__18826_18844__$1);{
var G__18846 = cljs.core.chunk_rest.call(null,seq__18826_18844__$1);
var G__18847 = c__4299__auto___18845;
var G__18848 = cljs.core.count.call(null,c__4299__auto___18845);
var G__18849 = (0);
seq__18826_18832 = G__18846;
chunk__18827_18833 = G__18847;
count__18828_18834 = G__18848;
i__18829_18835 = G__18849;
continue;
}
} else
{var vec__18831_18850 = cljs.core.first.call(null,seq__18826_18844__$1);var name_18851 = cljs.core.nth.call(null,vec__18831_18850,(0),null);var value_18852 = cljs.core.nth.call(null,vec__18831_18850,(1),null);domina.set_attr_BANG_.call(null,content,name_18851,value_18852);
{
var G__18853 = cljs.core.next.call(null,seq__18826_18844__$1);
var G__18854 = null;
var G__18855 = (0);
var G__18856 = (0);
seq__18826_18832 = G__18853;
chunk__18827_18833 = G__18854;
count__18828_18834 = G__18855;
i__18829_18835 = G__18856;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__18861_18865 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18862_18866 = null;var count__18863_18867 = (0);var i__18864_18868 = (0);while(true){
if((i__18864_18868 < count__18863_18867))
{var node_18869 = cljs.core._nth.call(null,chunk__18862_18866,i__18864_18868);goog.dom.classes.add(node_18869,class$);
{
var G__18870 = seq__18861_18865;
var G__18871 = chunk__18862_18866;
var G__18872 = count__18863_18867;
var G__18873 = (i__18864_18868 + (1));
seq__18861_18865 = G__18870;
chunk__18862_18866 = G__18871;
count__18863_18867 = G__18872;
i__18864_18868 = G__18873;
continue;
}
} else
{var temp__4126__auto___18874 = cljs.core.seq.call(null,seq__18861_18865);if(temp__4126__auto___18874)
{var seq__18861_18875__$1 = temp__4126__auto___18874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18861_18875__$1))
{var c__4299__auto___18876 = cljs.core.chunk_first.call(null,seq__18861_18875__$1);{
var G__18877 = cljs.core.chunk_rest.call(null,seq__18861_18875__$1);
var G__18878 = c__4299__auto___18876;
var G__18879 = cljs.core.count.call(null,c__4299__auto___18876);
var G__18880 = (0);
seq__18861_18865 = G__18877;
chunk__18862_18866 = G__18878;
count__18863_18867 = G__18879;
i__18864_18868 = G__18880;
continue;
}
} else
{var node_18881 = cljs.core.first.call(null,seq__18861_18875__$1);goog.dom.classes.add(node_18881,class$);
{
var G__18882 = cljs.core.next.call(null,seq__18861_18875__$1);
var G__18883 = null;
var G__18884 = (0);
var G__18885 = (0);
seq__18861_18865 = G__18882;
chunk__18862_18866 = G__18883;
count__18863_18867 = G__18884;
i__18864_18868 = G__18885;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__18890_18894 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18891_18895 = null;var count__18892_18896 = (0);var i__18893_18897 = (0);while(true){
if((i__18893_18897 < count__18892_18896))
{var node_18898 = cljs.core._nth.call(null,chunk__18891_18895,i__18893_18897);goog.dom.classes.remove(node_18898,class$);
{
var G__18899 = seq__18890_18894;
var G__18900 = chunk__18891_18895;
var G__18901 = count__18892_18896;
var G__18902 = (i__18893_18897 + (1));
seq__18890_18894 = G__18899;
chunk__18891_18895 = G__18900;
count__18892_18896 = G__18901;
i__18893_18897 = G__18902;
continue;
}
} else
{var temp__4126__auto___18903 = cljs.core.seq.call(null,seq__18890_18894);if(temp__4126__auto___18903)
{var seq__18890_18904__$1 = temp__4126__auto___18903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18890_18904__$1))
{var c__4299__auto___18905 = cljs.core.chunk_first.call(null,seq__18890_18904__$1);{
var G__18906 = cljs.core.chunk_rest.call(null,seq__18890_18904__$1);
var G__18907 = c__4299__auto___18905;
var G__18908 = cljs.core.count.call(null,c__4299__auto___18905);
var G__18909 = (0);
seq__18890_18894 = G__18906;
chunk__18891_18895 = G__18907;
count__18892_18896 = G__18908;
i__18893_18897 = G__18909;
continue;
}
} else
{var node_18910 = cljs.core.first.call(null,seq__18890_18904__$1);goog.dom.classes.remove(node_18910,class$);
{
var G__18911 = cljs.core.next.call(null,seq__18890_18904__$1);
var G__18912 = null;
var G__18913 = (0);
var G__18914 = (0);
seq__18890_18894 = G__18911;
chunk__18891_18895 = G__18912;
count__18892_18896 = G__18913;
i__18893_18897 = G__18914;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__18919_18923 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18920_18924 = null;var count__18921_18925 = (0);var i__18922_18926 = (0);while(true){
if((i__18922_18926 < count__18921_18925))
{var node_18927 = cljs.core._nth.call(null,chunk__18920_18924,i__18922_18926);goog.dom.classes.toggle(node_18927,class$);
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
{var node_18939 = cljs.core.first.call(null,seq__18919_18933__$1);goog.dom.classes.toggle(node_18939,class$);
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
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_18952__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__18948_18953 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18949_18954 = null;var count__18950_18955 = (0);var i__18951_18956 = (0);while(true){
if((i__18951_18956 < count__18950_18955))
{var node_18957 = cljs.core._nth.call(null,chunk__18949_18954,i__18951_18956);goog.dom.classes.set(node_18957,classes_18952__$1);
{
var G__18958 = seq__18948_18953;
var G__18959 = chunk__18949_18954;
var G__18960 = count__18950_18955;
var G__18961 = (i__18951_18956 + (1));
seq__18948_18953 = G__18958;
chunk__18949_18954 = G__18959;
count__18950_18955 = G__18960;
i__18951_18956 = G__18961;
continue;
}
} else
{var temp__4126__auto___18962 = cljs.core.seq.call(null,seq__18948_18953);if(temp__4126__auto___18962)
{var seq__18948_18963__$1 = temp__4126__auto___18962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18948_18963__$1))
{var c__4299__auto___18964 = cljs.core.chunk_first.call(null,seq__18948_18963__$1);{
var G__18965 = cljs.core.chunk_rest.call(null,seq__18948_18963__$1);
var G__18966 = c__4299__auto___18964;
var G__18967 = cljs.core.count.call(null,c__4299__auto___18964);
var G__18968 = (0);
seq__18948_18953 = G__18965;
chunk__18949_18954 = G__18966;
count__18950_18955 = G__18967;
i__18951_18956 = G__18968;
continue;
}
} else
{var node_18969 = cljs.core.first.call(null,seq__18948_18963__$1);goog.dom.classes.set(node_18969,classes_18952__$1);
{
var G__18970 = cljs.core.next.call(null,seq__18948_18963__$1);
var G__18971 = null;
var G__18972 = (0);
var G__18973 = (0);
seq__18948_18953 = G__18970;
chunk__18949_18954 = G__18971;
count__18950_18955 = G__18972;
i__18951_18956 = G__18973;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__18978_18982 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18979_18983 = null;var count__18980_18984 = (0);var i__18981_18985 = (0);while(true){
if((i__18981_18985 < count__18980_18984))
{var node_18986 = cljs.core._nth.call(null,chunk__18979_18983,i__18981_18985);goog.dom.setTextContent(node_18986,value);
{
var G__18987 = seq__18978_18982;
var G__18988 = chunk__18979_18983;
var G__18989 = count__18980_18984;
var G__18990 = (i__18981_18985 + (1));
seq__18978_18982 = G__18987;
chunk__18979_18983 = G__18988;
count__18980_18984 = G__18989;
i__18981_18985 = G__18990;
continue;
}
} else
{var temp__4126__auto___18991 = cljs.core.seq.call(null,seq__18978_18982);if(temp__4126__auto___18991)
{var seq__18978_18992__$1 = temp__4126__auto___18991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18978_18992__$1))
{var c__4299__auto___18993 = cljs.core.chunk_first.call(null,seq__18978_18992__$1);{
var G__18994 = cljs.core.chunk_rest.call(null,seq__18978_18992__$1);
var G__18995 = c__4299__auto___18993;
var G__18996 = cljs.core.count.call(null,c__4299__auto___18993);
var G__18997 = (0);
seq__18978_18982 = G__18994;
chunk__18979_18983 = G__18995;
count__18980_18984 = G__18996;
i__18981_18985 = G__18997;
continue;
}
} else
{var node_18998 = cljs.core.first.call(null,seq__18978_18992__$1);goog.dom.setTextContent(node_18998,value);
{
var G__18999 = cljs.core.next.call(null,seq__18978_18992__$1);
var G__19000 = null;
var G__19001 = (0);
var G__19002 = (0);
seq__18978_18982 = G__18999;
chunk__18979_18983 = G__19000;
count__18980_18984 = G__19001;
i__18981_18985 = G__19002;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19007_19011 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19008_19012 = null;var count__19009_19013 = (0);var i__19010_19014 = (0);while(true){
if((i__19010_19014 < count__19009_19013))
{var node_19015 = cljs.core._nth.call(null,chunk__19008_19012,i__19010_19014);goog.dom.forms.setValue(node_19015,value);
{
var G__19016 = seq__19007_19011;
var G__19017 = chunk__19008_19012;
var G__19018 = count__19009_19013;
var G__19019 = (i__19010_19014 + (1));
seq__19007_19011 = G__19016;
chunk__19008_19012 = G__19017;
count__19009_19013 = G__19018;
i__19010_19014 = G__19019;
continue;
}
} else
{var temp__4126__auto___19020 = cljs.core.seq.call(null,seq__19007_19011);if(temp__4126__auto___19020)
{var seq__19007_19021__$1 = temp__4126__auto___19020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19007_19021__$1))
{var c__4299__auto___19022 = cljs.core.chunk_first.call(null,seq__19007_19021__$1);{
var G__19023 = cljs.core.chunk_rest.call(null,seq__19007_19021__$1);
var G__19024 = c__4299__auto___19022;
var G__19025 = cljs.core.count.call(null,c__4299__auto___19022);
var G__19026 = (0);
seq__19007_19011 = G__19023;
chunk__19008_19012 = G__19024;
count__19009_19013 = G__19025;
i__19010_19014 = G__19026;
continue;
}
} else
{var node_19027 = cljs.core.first.call(null,seq__19007_19021__$1);goog.dom.forms.setValue(node_19027,value);
{
var G__19028 = cljs.core.next.call(null,seq__19007_19021__$1);
var G__19029 = null;
var G__19030 = (0);
var G__19031 = (0);
seq__19007_19011 = G__19028;
chunk__19008_19012 = G__19029;
count__19009_19013 = G__19030;
i__19010_19014 = G__19031;
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
{var value_19042 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19038_19043 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19039_19044 = null;var count__19040_19045 = (0);var i__19041_19046 = (0);while(true){
if((i__19041_19046 < count__19040_19045))
{var node_19047 = cljs.core._nth.call(null,chunk__19039_19044,i__19041_19046);node_19047.innerHTML = value_19042;
{
var G__19048 = seq__19038_19043;
var G__19049 = chunk__19039_19044;
var G__19050 = count__19040_19045;
var G__19051 = (i__19041_19046 + (1));
seq__19038_19043 = G__19048;
chunk__19039_19044 = G__19049;
count__19040_19045 = G__19050;
i__19041_19046 = G__19051;
continue;
}
} else
{var temp__4126__auto___19052 = cljs.core.seq.call(null,seq__19038_19043);if(temp__4126__auto___19052)
{var seq__19038_19053__$1 = temp__4126__auto___19052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19038_19053__$1))
{var c__4299__auto___19054 = cljs.core.chunk_first.call(null,seq__19038_19053__$1);{
var G__19055 = cljs.core.chunk_rest.call(null,seq__19038_19053__$1);
var G__19056 = c__4299__auto___19054;
var G__19057 = cljs.core.count.call(null,c__4299__auto___19054);
var G__19058 = (0);
seq__19038_19043 = G__19055;
chunk__19039_19044 = G__19056;
count__19040_19045 = G__19057;
i__19041_19046 = G__19058;
continue;
}
} else
{var node_19059 = cljs.core.first.call(null,seq__19038_19053__$1);node_19059.innerHTML = value_19042;
{
var G__19060 = cljs.core.next.call(null,seq__19038_19053__$1);
var G__19061 = null;
var G__19062 = (0);
var G__19063 = (0);
seq__19038_19043 = G__19060;
chunk__19039_19044 = G__19061;
count__19040_19045 = G__19062;
i__19041_19046 = G__19063;
continue;
}
}
} else
{}
}
break;
}
}catch (e19037){if((e19037 instanceof Error))
{var e_19064 = e19037;domina.replace_children_BANG_.call(null,content,value_19042);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19037;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19071_19075 = cljs.core.seq.call(null,children);var chunk__19072_19076 = null;var count__19073_19077 = (0);var i__19074_19078 = (0);while(true){
if((i__19074_19078 < count__19073_19077))
{var child_19079 = cljs.core._nth.call(null,chunk__19072_19076,i__19074_19078);frag.appendChild(child_19079);
{
var G__19080 = seq__19071_19075;
var G__19081 = chunk__19072_19076;
var G__19082 = count__19073_19077;
var G__19083 = (i__19074_19078 + (1));
seq__19071_19075 = G__19080;
chunk__19072_19076 = G__19081;
count__19073_19077 = G__19082;
i__19074_19078 = G__19083;
continue;
}
} else
{var temp__4126__auto___19084 = cljs.core.seq.call(null,seq__19071_19075);if(temp__4126__auto___19084)
{var seq__19071_19085__$1 = temp__4126__auto___19084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19071_19085__$1))
{var c__4299__auto___19086 = cljs.core.chunk_first.call(null,seq__19071_19085__$1);{
var G__19087 = cljs.core.chunk_rest.call(null,seq__19071_19085__$1);
var G__19088 = c__4299__auto___19086;
var G__19089 = cljs.core.count.call(null,c__4299__auto___19086);
var G__19090 = (0);
seq__19071_19075 = G__19087;
chunk__19072_19076 = G__19088;
count__19073_19077 = G__19089;
i__19074_19078 = G__19090;
continue;
}
} else
{var child_19091 = cljs.core.first.call(null,seq__19071_19085__$1);frag.appendChild(child_19091);
{
var G__19092 = cljs.core.next.call(null,seq__19071_19085__$1);
var G__19093 = null;
var G__19094 = (0);
var G__19095 = (0);
seq__19071_19075 = G__19092;
chunk__19072_19076 = G__19093;
count__19073_19077 = G__19094;
i__19074_19078 = G__19095;
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
return (function (p1__19065_SHARP_,p2__19066_SHARP_){return f.call(null,p1__19065_SHARP_,p2__19066_SHARP_);
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
{if((function (){var G__19097 = list_thing;if(G__19097)
{var bit__4193__auto__ = (G__19097.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19097.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19097.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19097);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19097);
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
{if((function (){var G__19098 = content;if(G__19098)
{var bit__4193__auto__ = (G__19098.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19098.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19098.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19098);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19098);
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
{if((function (){var G__19099 = content;if(G__19099)
{var bit__4193__auto__ = (G__19099.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19099.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19099.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19099);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19099);
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
